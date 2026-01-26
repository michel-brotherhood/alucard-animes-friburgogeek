
# Plano: Adicionar Pedro Azevedo como Primeira Atração

## Resumo

Adicionar o dublador Pedro Azevedo como primeira atração confirmada no Line-Up, incluir no cronograma às 14h e atualizar o SEO da página.

---

## 1. Copiar Imagem para o Projeto

A imagem enviada será copiada para `src/assets/pedro-azevedo.jpg` e importada no componente LineUp.

---

## 2. Atualizar Página Line-Up

### Arquivo: `src/pages/LineUp.tsx`

**Alterações:**

1. Importar a imagem do Pedro Azevedo
2. Criar card destacado para ele como primeira atração
3. Manter 3 cards "Em breve..." para futuras atrações
4. Adicionar link para Instagram

**Novo layout do grid:**

| Card 1 (CONFIRMADO) | Card 2 | Card 3 | Card 4 |
|---------------------|--------|--------|--------|
| Pedro Azevedo | Em breve... | Em breve... | Em breve... |
| Dublador | Logo FG | Logo FG | Logo FG |
| @pedroazevedodub | | | |

**Informacoes do card:**
- Nome: **Pedro Azevedo**
- Categoria: **Dublador**
- Destaques: Donkey Kong (Super Mario Bros.), Hercules (Marvel), Dot Barrett (Mashle)
- Instagram: `https://www.instagram.com/pedroazevedodub/`

---

## 3. Atualizar Cronograma

### Arquivo: `src/pages/Cronograma.tsx`

**Linha 15 - Trocar evento das 14h:**

| Antes | Depois |
|-------|--------|
| `"Show com o Guitarrista Raphael Freitas"` | `"Dublador: Pedro Azevedo"` |

**Linha 29 - Atualizar SEO description:**
- Substituir "show do guitarrista Raphael Freitas" por "dublador Pedro Azevedo"

---

## 4. Atualizar SEO do Line-Up

### Arquivo: `src/pages/LineUp.tsx`

**Linha 15 (description):**

| Antes | Depois |
|-------|--------|
| `"Line-up em breve!"` | `"Pedro Azevedo (dublador de Donkey Kong, Hercules MCU) confirmado! Confira as atrações do Friburgo Geek 2026."` |

---

## Resumo Visual do Card

```text
┌─────────────────────────────────┐
│  [Imagem Pedro Azevedo]         │
│  ┌─────────────────────────┐    │
│  │   Foto com personagens  │    │
│  │   dublados por ele      │    │
│  └─────────────────────────┘    │
│                                 │
│  PEDRO AZEVEDO                  │
│  Dublador                       │
│                                 │
│  Donkey Kong | Hercules (MCU)   │
│  Dot Barrett (Mashle)           │
│                                 │
│  [Instagram]                    │
│  @pedroazevedodub               │
└─────────────────────────────────┘
```

---

## Arquivos a Modificar

1. **Copiar imagem**: `user-uploads://Fq4jl9_aQAAhRk8.jpg` -> `src/assets/pedro-azevedo.jpg`
2. **`src/pages/LineUp.tsx`**: Adicionar card do Pedro Azevedo com destaque
3. **`src/pages/Cronograma.tsx`**: Atualizar evento das 14h e SEO
