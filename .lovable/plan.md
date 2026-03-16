

# Plano: Transição pós-evento

## Resumo
O evento Friburgo Geek 2026 aconteceu ontem. Precisamos: ocultar seções/páginas de Line-up e Concursos, redirecionar CTAs para o próximo evento (Gonça Geek), e adicionar os resultados do concurso de cosplay com as novas categorias ANIME e DESFILE LIVRE.

## 1. Atualizar dados do CosplayResults

Substituir as categorias GEEK/GAME pelos resultados reais da imagem:

- **ANIME** (3 classificados):
  - 1o Giovana - Angel Death - Chainsaw Man - 7.00
  - 2o Victor Hugo - Ichigo - Bleach - 6.50
  - 3o Felipe Attila - Monkey D Luffy - 6.50

- **DESFILE LIVRE** (3 classificados):
  - 1o Clara Torres - Astrid - How to train your dragon - 9.25
  - 2o Isabelly Trindade - ADA - Resident Evil 4 - 8.00
  - 3o Helena e Maria Julia - Mario e Luigi - 7.50

Adicionar subtítulo "3 classificados" ao lado do nome da categoria, conforme a imagem.

## 2. Adicionar CosplayResults na Home (Index.tsx)

Importar e inserir `<CosplayResults />` logo abaixo de `<Hero />`.

## 3. Criar página de Resultados (`src/pages/Resultados.tsx`)

Página dedicada com Header, CosplayResults, Footer e FloatingMenu. SEO adequado.

## 4. Atualizar navegação (Header.tsx)

- Remover links de "Concursos" e "Line-up" (desktop e mobile)
- Adicionar link "Resultados" apontando para `/resultados`

## 5. Atualizar rotas (App.tsx)

- Remover rotas: `/line-up`, `/concursos`, `/concursos/cosplay`, `/concursos/kpop`, `/concursos/animeke`, `/concursos/videogames`
- Adicionar rota: `/resultados`

## 6. Redirecionar CTAs para próximo evento

Substituir todos os links `https://www.uticket.com.br/event/01LQBL1W152TA5` por `https://goncageek.alucardanimes.com.br/` nos seguintes arquivos:
- `src/components/Hero.tsx` - botão "Comprar Ingressos" → "Próximo Evento"
- `src/components/Header.tsx` - botão CTA desktop e mobile
- `src/components/FloatingMenu.tsx` - item "Ingressos" → "Próximo Evento"
- Textos do Hero ajustados para contexto pós-evento

## 7. Ocultar seções pré-evento da Home

- Remover `<Countdown />` (não faz sentido pós-evento)
- Remover `<CosplayGallery />` (seção de inscrição no concurso)
- Manter EventInfo, VendorsSection, AlucardSection, FAQ

## Arquivos afetados
- `src/components/CosplayResults.tsx` - novos dados
- `src/pages/Index.tsx` - layout pós-evento
- `src/pages/Resultados.tsx` - nova página
- `src/App.tsx` - rotas
- `src/components/Header.tsx` - menu
- `src/components/Hero.tsx` - CTA
- `src/components/FloatingMenu.tsx` - CTA

