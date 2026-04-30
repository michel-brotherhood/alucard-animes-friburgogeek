import { useEffect, useState, useCallback } from "react";
import {
  GAMES_CATALOG,
  DEFAULT_SELECTED_GAME_IDS,
  type GameDefinition,
} from "@/lib/games-catalog";

const STORAGE_KEY = "fg:selected-games";
const EVENT_NAME = "fg:selected-games-changed";

const sanitize = (ids: unknown): string[] => {
  if (!Array.isArray(ids)) return DEFAULT_SELECTED_GAME_IDS;
  const valid = ids.filter(
    (id): id is string =>
      typeof id === "string" && GAMES_CATALOG.some((g) => g.id === id),
  );
  return valid.length > 0 ? valid : DEFAULT_SELECTED_GAME_IDS;
};

const readFromStorage = (): string[] => {
  if (typeof window === "undefined") return DEFAULT_SELECTED_GAME_IDS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SELECTED_GAME_IDS;
    return sanitize(JSON.parse(raw));
  } catch {
    return DEFAULT_SELECTED_GAME_IDS;
  }
};

export const useSelectedGames = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(readFromStorage);

  useEffect(() => {
    const handler = () => setSelectedIds(readFromStorage());
    window.addEventListener(EVENT_NAME, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(EVENT_NAME, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const updateSelection = useCallback((ids: string[]) => {
    const cleaned = sanitize(ids);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    window.dispatchEvent(new Event(EVENT_NAME));
    setSelectedIds(cleaned);
  }, []);

  const games: GameDefinition[] = selectedIds
    .map((id) => GAMES_CATALOG.find((g) => g.id === id))
    .filter((g): g is GameDefinition => Boolean(g));

  return { selectedIds, games, updateSelection };
};
