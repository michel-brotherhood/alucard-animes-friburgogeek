

# Plano: Atualizar K-Stage Live e Redesign do Cronograma

## Resumo das Alteracoes

1. **Renomear "Espaco K-Pop" para "K-Stage Live"** em toda a pagina ConcursoKpop.tsx
2. **Redesenhar completamente a pagina de Cronograma** seguindo o layout da imagem de referencia (duas colunas)
3. **Manter apenas Pedro Azevedo** como atracao confirmada (14:30 - 15:00)

---

## 1. Atualizar Titulo K-Stage Live

### Arquivo: `src/pages/ConcursoKpop.tsx`

**Alteracoes necessarias:**

| Local | Atual | Novo |
|-------|-------|------|
| Titulo H1 (linha 96) | "ESPACO K-POP" | "K-STAGE LIVE" |
| SEO Title (linha 74) | "Espaco K-pop 2026..." | "K-Stage Live 2026..." |
| SEO Description (linha 75) | "Espaco K-pop no Friburgo Geek..." | "K-Stage Live no Friburgo Geek..." |
| SEO Keywords (linha 77) | "espaco k-pop..." | "k-stage live, danca k-pop..." |
| Email subject (linhas 48-50) | "Espaco K-Pop" | "K-Stage Live" |
| Link email duvidas (linha 353) | "Espaco%20K-Pop" | "K-Stage%20Live" |

---

## 2. Redesign Completo do Cronograma

### Arquivo: `src/pages/Cronograma.tsx`

**Novo Layout (conforme imagem de referencia):**

```text
┌─────────────────────────────────────────────────────┐
│                    DOMINGO                          │
│              18 de Janeiro de 2026                  │
├──────────────────────┬──────────────────────────────┤
│  ATIVIDADES          │     STAGE PRINCIPAL          │
│  CONTINUAS           │     Horarios especificos     │
│  Durante o evento    │                              │
├──────────────────────┼──────────────────────────────┤
│ • Arena Gamer        │ 11:00 - Entrada VIPs/Cosplay │
│ • Campeonatos        │ 12:00 - Entrada Antecipados  │
│ • Mario Kart         │ 12:00 - Cine Anime           │
│ • Wood Games         │ 13:00 - Gincanas             │
│ • Stands de Vendas   │ 14:30 - Pedro Azevedo        │
│ • Yume Geek Store    │ 15:00 - K-Stage Live         │
│ • Praca Alimentacao  │ 15:30 - Encerr. Inscr. Cosp. │
│                      │ 16:00 - Cosplay              │
│                      │ 17:00 - Animeke              │
│                      │ 17:30 - Resultados           │
│                      │ 17:40 - Sorteios             │
│                      │ 17:50 - Last Quizz           │
│                      │ 18:00 - Encerramento         │
└──────────────────────┴──────────────────────────────┘
```

### Dados Estruturados

**Atividades Continuas (coluna esquerda):**
```tsx
const atividadesContinuas = [
  { icon: "Gamepad2", name: "Arena Gamer & Retro Games", location: "Arena Games" },
  { icon: "Trophy", name: "Campeonatos de Videogames", location: "Arena Games" },
  { icon: "Car", name: "Mario Kart Live Home Circuit", location: "Arena Games" },
  { icon: "Puzzle", name: "Wood Games - Jogos de Madeira", location: "Area de Jogos" },
  { icon: "Store", name: "Stands de Vendas", location: "Area de Exposicao" },
  { icon: "ShoppingBag", name: "Yume Geek Store", location: "Stand Especial" },
  { icon: "UtensilsCrossed", name: "Praca de Alimentacao", location: "Area Gastronomica" },
];
```

**Stage Principal (coluna direita) - conforme referencia mas SEM outras atracoes:**
```tsx
const stagePrincipal = [
  { time: "11:00", icon: "Ticket", event: "Entrada VIPs/Cosplay" },
  { time: "12:00", icon: "Ticket", event: "Entrada Antecipados" },
  { time: "12:00", icon: "Film", event: "Cine Anime" },
  { time: "13:00", icon: "Flag", event: "Gincanas" },
  { time: "14:30", icon: "Mic", event: "Pedro Azevedo" },  // UNICA ATRACAO CONFIRMADA
  { time: "15:00", icon: "Music", event: "K-Stage Live" },
  { time: "15:30", icon: "Edit", event: "Encerramento Inscricoes Cosplay" },
  { time: "16:00", icon: "Star", event: "Cosplay" },
  { time: "17:00", icon: "Mic2", event: "Animeke" },
  { time: "17:30", icon: "Trophy", event: "Resultados/Campeonatos" },
  { time: "17:40", icon: "Gift", event: "Sorteios" },
  { time: "17:50", icon: "HelpCircle", event: "Last Quizz" },
  { time: "18:00", icon: "Flag", event: "Encerramento" },
];
```

### Novos Icones Necessarios

Adicionar imports do lucide-react:
```tsx
import { 
  RefreshCw, Mic, Clock, Film, Flag, Ticket, Music, 
  Star, Trophy, Gift, HelpCircle, Edit, Gamepad2, 
  Car, Puzzle, Store, ShoppingBag, UtensilsCrossed, Mic2 
} from "lucide-react";
```

### Estrutura Visual

**Cabecalho "DOMINGO":**
- Fundo cyan/accent arredondado
- Texto escuro (secondary)
- Data: "18 de Janeiro de 2026"

**Colunas:**
- Layout responsivo: 1 coluna em mobile, 2 colunas em desktop
- Fundo semi-transparente azul
- Cards com icones cyan

**Estilo dos Cards:**
- Fundo: `bg-primary/60` ou `bg-[#1a4a6e]`
- Bordas arredondadas
- Icone + texto
- Horario em badge cyan para Stage Principal

---

## Arquivos a Modificar

1. **`src/pages/ConcursoKpop.tsx`**
   - Renomear "Espaco K-Pop" → "K-Stage Live"
   - Atualizar SEO e textos de email

2. **`src/pages/Cronograma.tsx`**
   - Redesign completo com layout de duas colunas
   - Adicionar novos icones
   - Atualizar data para 18 de Janeiro de 2026
   - Atualizar horario Pedro Azevedo para 14:30-15:00
   - Adicionar K-Stage Live as 15:00

---

## Detalhes Visuais (baseado na imagem)

**Cores:**
- Fundo geral: gradiente azul escuro para claro
- Cards: azul semi-transparente `bg-[#1a5f7a]/80`
- Badges horario: cyan/accent `bg-accent`
- Textos: branco e cyan

**Tipografia:**
- Titulos de secao: bold, caixa alta, cyan
- Subtitulos: cinza claro/branco opaco
- Horarios: bold, dentro de badge cyan

