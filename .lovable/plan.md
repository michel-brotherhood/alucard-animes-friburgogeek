

# Plano: Aumentar a Visibilidade da Imagem do Pedro Azevedo

## Problema Atual

A imagem está configurada com `aspect-[4/3]` (proporção 4:3) e `object-cover`, o que corta partes da imagem para encaixar na proporção definida. A imagem original tem uma proporção diferente e precisa de mais espaço vertical.

---

## Solução

Aumentar a proporção da imagem para mostrar mais conteúdo, usando um aspect ratio mais alto/quadrado.

### Arquivo: `src/pages/LineUp.tsx`

**Linha 51 - Alteração da proporção:**

| Atual | Novo |
|-------|------|
| `aspect-[4/3]` | `aspect-square` ou `aspect-[3/4]` |

**Opções de proporção:**

1. **`aspect-square`** (1:1) - Imagem quadrada, mostra mais área vertical
2. **`aspect-[3/4]`** - Proporção retrato, mostra ainda mais da imagem
3. **`aspect-[2/3]`** - Proporção retrato mais alta

**Recomendação:** Usar `aspect-[3/4]` para mostrar a imagem em formato retrato, que é mais comum para fotos de pessoas e mostrará mais do conteúdo.

---

## Mudança no Código

```text
ANTES (linha 51):
className="w-full aspect-[4/3] object-cover ..."

DEPOIS:
className="w-full aspect-[3/4] object-cover ..."
```

---

## Resultado Visual

```text
ANTES (4:3 - paisagem):        DEPOIS (3:4 - retrato):
┌──────────────┐               ┌──────────┐
│              │               │          │
│   [Imagem]   │               │          │
│              │               │ [Imagem] │
└──────────────┘               │          │
                               │          │
                               └──────────┘
```

A proporção 3:4 (retrato) mostrará mais da imagem do Pedro Azevedo, especialmente se for uma foto em formato vertical.

