import { Gamepad2, Swords, Trophy, type LucideIcon } from "lucide-react";
import mortalKombat11 from "@/assets/mortal-kombat-11-banner.webp";
import mortalKombat1 from "@/assets/mortal-kombat-1-banner.webp";
import streetFighter6 from "@/assets/street-fighter-6-banner.webp";
import tekken8 from "@/assets/tekken-8-banner.webp";
import kof2002 from "@/assets/kof-2002-banner.webp";
import fifa26 from "@/assets/fifa-26-banner.webp";
import fifa2025 from "@/assets/fifa-2025-banner.webp";
import justDance from "@/assets/just-dance-banner.webp";
import leagueOfLegends from "@/assets/league-of-legends-banner.webp";

export type GameCategory = "Luta" | "Futebol" | "Dança" | "MOBA";

export interface GameDefinition {
  id: string;
  title: string;
  category: GameCategory;
  image: string;
  icon: LucideIcon;
  gradient: string;
}

export const GAMES_CATALOG: GameDefinition[] = [
  {
    id: "mk11",
    title: "Mortal Kombat 11",
    category: "Luta",
    image: mortalKombat11,
    icon: Swords,
    gradient: "from-yellow-600 to-orange-500",
  },
  {
    id: "mk1",
    title: "Mortal Kombat 1",
    category: "Luta",
    image: mortalKombat1,
    icon: Swords,
    gradient: "from-yellow-600 to-red-500",
  },
  {
    id: "sf6",
    title: "Street Fighter 6",
    category: "Luta",
    image: streetFighter6,
    icon: Gamepad2,
    gradient: "from-blue-600 to-purple-500",
  },
  {
    id: "tekken8",
    title: "Tekken 8",
    category: "Luta",
    image: tekken8,
    icon: Swords,
    gradient: "from-red-600 to-orange-500",
  },
  {
    id: "kof2002",
    title: "KoF 2002",
    category: "Luta",
    image: kof2002,
    icon: Swords,
    gradient: "from-red-600 to-orange-500",
  },
  {
    id: "fifa26",
    title: "FIFA 26",
    category: "Futebol",
    image: fifa26,
    icon: Trophy,
    gradient: "from-green-600 to-emerald-500",
  },
  {
    id: "fifa25",
    title: "FIFA 2025",
    category: "Futebol",
    image: fifa2025,
    icon: Trophy,
    gradient: "from-green-600 to-emerald-500",
  },
  {
    id: "justdance",
    title: "Just Dance",
    category: "Dança",
    image: justDance,
    icon: Gamepad2,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: "lol",
    title: "League of Legends",
    category: "MOBA",
    image: leagueOfLegends,
    icon: Gamepad2,
    gradient: "from-cyan-600 to-blue-700",
  },
];

export const DEFAULT_SELECTED_GAME_IDS = ["mk11", "sf6", "kof2002", "fifa26"];

export const getGameById = (id: string): GameDefinition | undefined =>
  GAMES_CATALOG.find((g) => g.id === id);
