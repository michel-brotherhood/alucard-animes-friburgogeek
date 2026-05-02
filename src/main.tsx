import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Bloqueia atalhos comuns para abrir o DevTools e o menu de contexto (inspecionar elemento)
if (typeof window !== "undefined" && import.meta.env.PROD) {
  // Desabilita o menu de contexto (clique direito / "Inspecionar")
  window.addEventListener("contextmenu", (e) => e.preventDefault());

  // Bloqueia F12 e atalhos do DevTools
  window.addEventListener("keydown", (e) => {
    const key = e.key?.toLowerCase();
    const isDevToolsCombo =
      key === "f12" ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key)) ||
      ((e.ctrlKey || e.metaKey) && key === "u"); // ver código-fonte
    if (isDevToolsCombo) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
