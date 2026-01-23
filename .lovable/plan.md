

# Plano: Trocar Logo do Botão Flutuante

## Objetivo

Substituir as logos de balão SVG pela logo principal colorida do Friburgo Geek no botão flutuante.

---

## Alteração

### Arquivo: `src/components/FloatingMenu.tsx`

**Mudança nos imports (linhas 4-5):**

| Antes | Depois |
|-------|--------|
| `import logoFrente from "@/assets/nova_logo_balao_frente.svg"` | `import logoFrente from "@/assets/friburgo-geek-logo.png"` |
| `import logoVerso from "@/assets/verso_novo.svg"` | `import logoVerso from "@/assets/friburgo-geek-logo.png"` |

Como a logo principal é uma única imagem (não tem versão "verso"), vou usar a mesma logo para ambos os estados (aberto e fechado), com uma rotação/animação quando aberto para indicar que pode fechar.

**Ajuste no botão (linhas 135-147):**

Quando o menu estiver aberto, aplicar uma leve rotação ou opacidade reduzida para indicar estado "fechar", mantendo a mesma logo.

---

## Resultado Visual

```text
ANTES:
┌─────────────────┐
│ 🎈 Balão SVG    │ ← Logo de balão com frente/verso
└─────────────────┘

DEPOIS:
┌─────────────────┐
│ 🎮 Logo FG      │ ← Logo principal do Friburgo Geek
└─────────────────┘
```

---

## Arquivo a Modificar

- `src/components/FloatingMenu.tsx` - Trocar imports e ajustar animação do estado aberto/fechado

