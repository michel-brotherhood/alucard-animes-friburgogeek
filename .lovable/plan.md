
# Plano: Atualização Completa do Site - Nova Data e Remoção do Tema de Natal

## Resumo das Alterações

Este plano atualiza o site do Friburgo Geek para a nova data (15/03/2026), remove todas as referências ao tema de Natal, atualiza os links de ingressos, reintegra a página Line-Up com conteúdo "em breve" e remove a página de resultados.

---

## 1. Atualização da Data do Evento

### Nova Data: 15 de Março de 2026

**Arquivos a alterar:**

| Arquivo | Alteração |
|---------|-----------|
| `src/components/EventInfo.tsx` | "14 de Dezembro de 2025" → "15 de Março de 2026" |
| `src/components/Footer.tsx` | "14 de Dezembro de 2025" → "15 de Março de 2026" |
| `src/components/FAQ.tsx` | Linha 12: "14 de dezembro de 2025" → "15 de março de 2026" |
| `src/components/Countdown.tsx` | Linha 12: `"2025-12-14"` → `"2026-03-15"` |
| `src/pages/Cronograma.tsx` | Linha 47: "14 de Dezembro de 2025" → "15 de Março de 2026", "DOMINGO" → "DOMINGO" (15/03/2026 é domingo) |
| `src/pages/Concursos.tsx` | Linhas 102-103: datas de inscrição |
| `src/pages/ConcursoKpop.tsx` | Linha 138: data do evento |
| `index.html` | Linhas 10, 75-77: datas no schema.org e descrições |

---

## 2. Remoção do Tema de Natal

### 2.1 Remover SnowEffect de todas as páginas

| Arquivo | Ação |
|---------|------|
| `src/pages/Index.tsx` | Remover import e uso de `<SnowEffect />` |
| `src/pages/LineUp.tsx` | Remover import e uso de `<SnowEffect />` |
| `src/pages/OEvento.tsx` | Remover import e uso de `<SnowEffect />` |
| `src/pages/Ingressos.tsx` | Remover import e uso de `<SnowEffect />` |
| `src/pages/Concursos.tsx` | Remover import e uso de `<SnowEffect />` |

### 2.2 Atualizar Textos com Referências a "Natal"

| Arquivo | Alteração |
|---------|-----------|
| `src/pages/Index.tsx` | SEO: "Friburgo Geek Natal 2025" → "Friburgo Geek 2026" |
| `src/components/Hero.tsx` | "Friburgo Geek Natal 2025 foi incrível!" → "Prepare-se para o próximo Friburgo Geek!" (novo contexto pré-evento) |
| `src/pages/OEvento.tsx` | SEO e textos: remover "Natal" |
| `src/pages/Ingressos.tsx` | SEO e textos: remover "Natal" |
| `src/pages/Concursos.tsx` | SEO e textos: remover "Natal" |
| `src/pages/LineUp.tsx` | SEO e textos: remover "Natal" |
| `src/pages/Cronograma.tsx` | SEO: remover "Natal" |
| `src/components/Footer.tsx` | Linha 65: "Friburgo Geek Natal" → "Friburgo Geek" |
| `src/components/FAQ.tsx` | Linha 24: "Friburgo Geek Natal" → "Friburgo Geek" |
| `index.html` | Títulos e descrições: remover "Natal" |

### 2.3 Atualizar Hero para Contexto Pré-Evento

O Hero atual mostra agradecimento pelo evento passado. Será atualizado para promover o próximo evento:

```text
Antes:
- "Obrigado por participar!"
- "Friburgo Geek Natal 2025 foi incrível!"
- Card de próximo evento: Nit Geek Festival

Depois:
- "Próximo Evento"
- "Friburgo Geek 2026"
- Informações do próprio evento (15/03/2026, Nova Friburgo)
- Botão "Comprar Ingressos" → novo link Uticket
```

---

## 3. Atualização dos Links de Ingressos

### Novo link: `https://www.uticket.com.br/event/01LQBL1W152TA5`

| Arquivo | Linhas a alterar |
|---------|------------------|
| `src/components/Header.tsx` | Linha 81, 176: CTA buttons |
| `src/components/FloatingMenu.tsx` | Linha 39: menu item "Ingressos" |
| `src/components/Footer.tsx` | Linha 23: link de ingressos |
| `src/pages/Ingressos.tsx` | Linha 133: botões de compra dos tickets |
| `src/components/FAQ.tsx` | Linha 36: link dentro da resposta |
| `src/pages/LineUp.tsx` | Linha 131: CTA de ingressos |
| `src/pages/OEvento.tsx` | Linha 218: CTA de ingressos |
| `src/components/Hero.tsx` | Linhas 57-67: atualizar para novo link |

---

## 4. Página Line-Up: Conteúdo "Em Breve"

A página LineUp será atualizada para mostrar que o line-up está sendo montado:

```text
Antes:
- Mostra Raphael Freitas como artista confirmado
- Cards "Em breve..."

Depois:
- Título: "LINE-UP"
- Subtítulo: "Line-up 2026 em breve!"
- Grid com 4 cards todos mostrando logo + "Em breve..."
- CTA para comprar ingressos atualizado
- SEO atualizado (remover "Natal", atualizar para 2026)
```

---

## 5. Remoção da Página de Resultados

### 5.1 Remover Rota e Import

**Arquivo: `src/App.tsx`**
- Remover linha 18: `import ResultadosConcursos`
- Remover linha 48: `<Route path="/resultados-concursos" ...>`

### 5.2 Atualizar Header (Desktop e Mobile)

**Arquivo: `src/components/Header.tsx`**
- Linhas 64-69: Remover link "Resultados Concursos" e adicionar "Line-up" no lugar
- Linhas 158-163: Remover link "Resultados Concursos" no mobile e adicionar "Line-up"

### 5.3 Remover CosplayResults da Homepage

**Arquivo: `src/pages/Index.tsx`**
- Remover import de `CosplayResults`
- Remover uso de `<CosplayResults />`

### 5.4 Deletar arquivo

- Deletar `src/pages/ResultadosConcursos.tsx`

---

## 6. Resumo Visual das Mudanças

```text
ANTES (Tema Natal + Pós-Evento):
┌─────────────────────────────────────────┐
│ ❄️ Snow Effect em todas as páginas     │
│ 📅 14 de Dezembro de 2025              │
│ 🎄 "Friburgo Geek Natal 2025"          │
│ 📊 Página de Resultados                │
│ 🎸 Line-Up com Raphael confirmado      │
│ 🔗 Link: nitgeekfestival...            │
└─────────────────────────────────────────┘

DEPOIS (Tema Neutro + Pré-Evento):
┌─────────────────────────────────────────┐
│ ✨ Sem Snow Effect                      │
│ 📅 15 de Março de 2026                 │
│ 🎮 "Friburgo Geek 2026"                │
│ ❌ Sem página de Resultados            │
│ 🔜 Line-Up todo "Em breve"             │
│ 🔗 Link: uticket.com.br/event/01LQ...  │
└─────────────────────────────────────────┘
```

---

## Detalhes Técnicos

### Arquivos a Modificar (15 arquivos)

1. `src/pages/Index.tsx` - Remover SnowEffect, CosplayResults, atualizar SEO
2. `src/pages/LineUp.tsx` - Atualizar para "em breve", remover SnowEffect
3. `src/pages/OEvento.tsx` - Remover SnowEffect e "Natal", atualizar links
4. `src/pages/Ingressos.tsx` - Remover SnowEffect e "Natal", atualizar links
5. `src/pages/Concursos.tsx` - Remover SnowEffect e "Natal", atualizar datas
6. `src/pages/Cronograma.tsx` - Atualizar data, remover "Natal"
7. `src/pages/ConcursoKpop.tsx` - Atualizar data
8. `src/components/Hero.tsx` - Redesenhar para promover próximo evento
9. `src/components/Header.tsx` - Trocar "Resultados" por "Line-up", atualizar links
10. `src/components/Footer.tsx` - Atualizar data e remover "Natal"
11. `src/components/FAQ.tsx` - Atualizar data, remover "Natal", novo link
12. `src/components/EventInfo.tsx` - Atualizar data
13. `src/components/Countdown.tsx` - Atualizar data alvo
14. `src/components/FloatingMenu.tsx` - Atualizar link de ingressos
15. `src/App.tsx` - Remover rota de resultados
16. `index.html` - Atualizar meta tags e schema.org

### Arquivo a Deletar

- `src/pages/ResultadosConcursos.tsx`

### Vídeo Inicial

O vídeo no início da página (Hero) será mantido conforme solicitado. O componente Hero será reestruturado mas preservará o vídeo existente.
