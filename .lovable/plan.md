## Trocar jogos do campeonato

Substituir três jogos no site:
- Mortal Kombat 1 → **Mortal Kombat 11**
- Tekken 8 → **The King of Fighters 2002 (KoF 2002)**
- FIFA 25/2025 → **FIFA 26**

Street Fighter 6 permanece.

### 1. Gerar banners (não existem nos assets)
Usar Lovable AI (`google/gemini-3.1-flash-image-preview`) via script para gerar 3 banners no mesmo formato/proporção dos atuais (paisagem, estilo key art do jogo) e salvar em `src/assets/`:
- `mortal-kombat-11-banner.webp`
- `kof-2002-banner.webp`
- `fifa-26-banner.webp`

### 2. Atualizar referências de código
- `src/components/GamesSection.tsx` — trocar imports, títulos e categoria (KoF = "Luta", FIFA 26 = "Futebol").
- `src/pages/ConcursoVideogames.tsx` — trocar imports, array `jogos`, e textos do `<SEO>` (title/description/keywords).
- `src/components/Features.tsx` — atualizar a string de campeonatos: "Cosplay, K-POP, FIFA 26, Mortal Kombat 11, Street Fighter 6 e KoF 2002".
- `src/pages/OEvento.tsx` (linha 167) — mesma atualização de texto.

### 3. QA
Verificar visualmente os banners gerados antes de finalizar; se algum sair ruim, regenerar.
