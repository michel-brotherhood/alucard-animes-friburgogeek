

# Plano: Melhorar Visual do Card Pedro Azevedo

## Problemas Identificados

1. **Imagem cortada** - Altura fixa `h-48` com `object-cover` está cortando a imagem
2. **Cores erradas** - Usando amarelo (`accent`) quando deveria usar roxo/vermelho da marca
3. **Release incompleto** - Só mostra 3 personagens, não a biografia completa
4. **Efeitos hover simples** - Apenas `hover:scale-105`

## Paleta de Cores da Identidade

| Cor | Variável | HSL | Uso |
|-----|----------|-----|-----|
| Vermelho | `primary` | 354 70% 54% | Botões, destaques principais |
| Roxo | `secondary` | 270 70% 35% | Backgrounds, seções |
| Amarelo | `accent` | 48 100% 62% | Títulos, detalhes |

---

## Solução: Card Destacado Maior

Vou transformar o card do Pedro Azevedo em um **card featured horizontal** que ocupa mais espaço e mostra toda a informação.

### Novo Layout

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  ┌─────────────────┐   PEDRO AZEVEDO                                     │
│  │                 │   Dublador • Ator • Diretor de Dublagem             │
│  │     [IMAGEM     │                                                     │
│  │     COMPLETA]   │   Pedro Henrique Barros de Azevedo (Niterói/RJ,     │
│  │                 │   17 de outubro de 1990) é ator, dublador...        │
│  │                 │                                                     │
│  │                 │   TRABALHOS PRINCIPAIS:                             │
│  │                 │   • Donkey Kong (Super Mario Bros. - O Filme)       │
│  │                 │   • Hércules (Marvel/MCU)                           │
│  │                 │   • Dot Barrett (Mashle: Magia e Músculos)          │
│  │                 │   • Prowl (Transformers: War for Cybertron)         │
│  │                 │   • Harold (Bunnicula: O Vampiro Coelho)            │
│  │                 │                                                     │
│  └─────────────────┘   [Instagram] @pedroazevedodub                      │
│                                                                          │
│  ┌────────────────┐                                                      │
│  │  CONFIRMADO    │                                                      │
│  └────────────────┘                                                      │
└──────────────────────────────────────────────────────────────────────────┘
```

### Alterações Visuais

**Cores corrigidas:**
- Background: `bg-gradient-to-br from-secondary/30 to-primary/20` (roxo para vermelho)
- Borda: `border-primary` (vermelho) ao invés de amarelo
- Badge "CONFIRMADO": `bg-primary` (vermelho)
- Textos de destaque: `text-white` e `text-primary`

**Imagem completa:**
- Remover altura fixa `h-48`
- Usar `object-contain` para mostrar imagem inteira
- Ou usar altura maior `h-auto max-h-96`

**Efeitos de hover elaborados:**
- Card: `hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]` (glow roxo)
- Card: `hover:border-primary` com transição suave
- Imagem: `group-hover:scale-105` (zoom na imagem)
- Badge: Animação de pulso suave
- Textos/links: Efeitos de underline animado

---

## Arquivo a Modificar

### `src/pages/LineUp.tsx`

**Estrutura do novo card:**

1. **Card container** (linhas 42-71)
   - Layout horizontal em desktop: `grid md:grid-cols-2`
   - Cores da marca: `from-secondary/20 to-primary/10`
   - Borda vermelha: `border-primary`
   - Glow hover roxo

2. **Lado esquerdo - Imagem**
   - Remover `h-48 object-cover`
   - Usar `aspect-auto` para mostrar imagem completa
   - Adicionar `group-hover:scale-105` para zoom suave

3. **Lado direito - Conteúdo**
   - Nome grande: `text-3xl font-black text-white`
   - Subtítulo: `text-primary` (vermelho)
   - Biografia completa em parágrafo
   - Lista de trabalhos principais
   - Link Instagram com hover animado

4. **Badge CONFIRMADO**
   - Trocar `bg-accent` por `bg-primary`
   - Adicionar `animate-pulse` suave

---

## Resumo das Mudanças de Cor

| Elemento | Antes (amarelo) | Depois (vermelho/roxo) |
|----------|-----------------|------------------------|
| Background card | `from-accent/20` | `from-secondary/20 to-primary/10` |
| Borda card | `border-accent` | `border-primary` |
| Badge | `bg-accent text-secondary` | `bg-primary text-white` |
| Nome | `text-accent` | `text-white` |
| Link Instagram | `text-accent` | `text-primary` |
| Hover glow | - | `shadow-[0_0_40px_rgba(139,92,246,0.4)]` |

