

# Plano: Reativar evento para 7 de Junho de 2026

## Resumo
Mudar data do evento para 7 de Junho de 2026, reativar páginas de Line-up (tudo "em breve") e Concursos, trocar CTAs de "Próximo Evento" (Gonça Geek) para "Comprar Ingressos" apontando para o novo link uticket. Manter seção e página de resultados do cosplay da edição anterior.

## 1. Atualizar datas (7 de Junho de 2026)

- `src/components/EventInfo.tsx` - "15 de Março" → "7 de Junho"
- `src/components/Countdown.tsx` - targetDate para `2026-06-07T00:00:00`
- `src/pages/Cronograma.tsx` - "15 de Março" → "7 de Junho"
- `src/pages/Concursos.tsx` - "15 de Março" → "7 de Junho"

## 2. Reativar Hero para modo pré-evento

- `src/components/Hero.tsx` - Remover texto "O evento aconteceu!" e card do Gonça Geek. Voltar com CTA "Comprar Ingressos" apontando para `https://www.uticket.com.br/evento/friburgo-geek/01LVOBX8IGFLC8`. Manter data 7 de Junho de 2026, Nova Friburgo.

## 3. Reativar Countdown na Home

- `src/pages/Index.tsx` - Importar e adicionar `<Countdown />` antes do `<EventInfo />`. Manter `<CosplayResults />` abaixo do Hero (resultados da edição anterior).

## 4. Reativar rotas de Line-up e Concursos

- `src/App.tsx` - Adicionar rotas: `/line-up`, `/concursos`, `/concursos/cosplay`, `/concursos/kpop`, `/concursos/animeke`, `/concursos/videogames` com imports.

## 5. Atualizar Line-up para "tudo em breve"

- `src/pages/LineUp.tsx` - Remover card do Pedro Azevedo (confirmado). Exibir apenas 4 cards "Em breve". Atualizar CTA de ingressos para o novo link uticket.

## 6. Atualizar navegação (Header.tsx)

- Adicionar links "Concursos" e "Line-up" no menu desktop e mobile.
- Trocar botão CTA de "Próximo Evento" (Gonça Geek) para "Comprar Ingressos" apontando para uticket.

## 7. Atualizar FloatingMenu

- Trocar item "Próximo Evento" (Gonça Geek) para "Ingressos" apontando para o link uticket.

## 8. Atualizar Concursos

- `src/pages/Concursos.tsx` - Atualizar data para 7 de Junho de 2026. CTA de ingressos para novo link.

## Arquivos afetados
- `src/components/Hero.tsx`
- `src/components/EventInfo.tsx`
- `src/components/Countdown.tsx`
- `src/components/Header.tsx`
- `src/components/FloatingMenu.tsx`
- `src/pages/Index.tsx`
- `src/pages/LineUp.tsx`
- `src/pages/Cronograma.tsx`
- `src/pages/Concursos.tsx`
- `src/App.tsx`

