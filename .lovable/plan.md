

# Plano: Melhorias na Pagina Line-Up, K-pop e Cronograma

## Resumo das Alteracoes

1. **Instalar framer-motion** e adicionar animacoes de entrada nos cards
2. **Trocar cor "Dublador..."** de rosa (`text-primary`) para amarelo (`text-accent`)
3. **Transformar K-pop** de "Campeonato" para "Espaco K-pop" (apresentacao livre)
4. **Atualizar cronograma** removendo Raphael Freitas e ajustando K-pop

---

## 1. Instalar Framer Motion

**Arquivo:** `package.json`

Adicionar dependencia:
```
"framer-motion": "^11.0.0"
```

---

## 2. Animacoes de Entrada nos Cards do Line-Up

**Arquivo:** `src/pages/LineUp.tsx`

**Importar framer-motion:**
```tsx
import { motion } from "framer-motion";
```

**Envolver cada card com motion.div:**
- Card do Pedro Azevedo: entrada com delay 0
- Cards "Em breve": entrada com delay progressivo (0.1s, 0.2s, 0.3s)

**Animacao:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
  {/* Card content */}
</motion.div>
```

---

## 3. Trocar Cor do Subtitulo "Dublador..."

**Arquivo:** `src/pages/LineUp.tsx` (linha 56)

| Atual | Novo |
|-------|------|
| `text-primary` (rosa/vermelho) | `text-accent` (amarelo) |

```tsx
// ANTES
<p className="text-primary text-sm font-bold mb-3">Dublador • Ator • Diretor</p>

// DEPOIS
<p className="text-accent text-sm font-bold mb-3">Dublador • Ator • Diretor</p>
```

---

## 4. Transformar K-pop em "Espaco K-pop" (Apresentacao Livre)

**Arquivo:** `src/pages/ConcursoKpop.tsx`

### Mudancas Principais:

**Titulo:**
- De: "CAMPEONATO K-POP" / "Batalha das Gerações"
- Para: "ESPACO K-POP" / "Se você ama dançar e quer brilhar diante do público, essa é a sua chance!"

**Conceito (baseado na imagem):**
- Apresentacao livre, sem juri ou competicao
- Vagas limitadas por ordem de inscricao
- Tempo maximo: 5 minutos
- Inscricao inclui entrada para ate 5 integrantes

**Secoes de "Informacoes Importantes" (conforme imagem):**

1. **Como Funciona:**
   - Inscricoes somente pelo formulario desta pagina
   - Vagas preenchidas por ordem de inscricao
   - Inscricao inclui entrada no evento para ate 5 integrantes
   - Apresentacao livre, sem juri ou competicao
   - Tempo maximo: 5 minutos

2. **Sobre a Musica:**
   - Musica em formato MP3 em pen-drive
   - Check-in ate as 13h no dia do evento
   - Ordem de apresentacao definida pela organizacao

3. **Regras Basicas:**
   - Proibido palavroes, apelo sexual desnecessario ou ofensas
   - Proibido uso de armas ou acessorios que coloquem em risco os presentes
   - Menores de idade precisam de autorizacao dos responsaveis
   - Nao permitido nada que suje o palco ou prejudique outras apresentacoes

**Remover:**
- Sistema de 3 chaves (Old/Middle/New School)
- Criterios de julgamento
- Premiacoes em dinheiro
- Formulario completo de campeonato

**Simplificar formulario:**
- Nome do grupo
- Lider/Representante
- Email
- Telefone
- Numero de integrantes
- Musica
- Artista

---

## 5. Atualizar Pagina Concursos.tsx

**Arquivo:** `src/pages/Concursos.tsx` (linhas 21-27)

**Alterar descricao do K-pop:**

| Atual | Novo |
|-------|------|
| "Batalha das Gerações! Grupos de 3 a 10 integrantes concorrem a R$ 400,00 em cada chave." | "Espaco livre para dancas K-pop! Apresentacao sem competicao, vagas limitadas." |

**Atualizar secao "Informacoes Importantes":**

| Item | Atual | Novo |
|------|-------|------|
| Inscricoes K-pop | "Ate 15 de Marco de 2026" | "Por ordem de inscricao (vagas limitadas)" |
| Premiacao K-pop | "R$ 400,00 por chave" | "Apresentacao livre (sem premiacao)" |

---

## 6. Atualizar Cronograma

**Arquivo:** `src/pages/Cronograma.tsx`

### Alteracao 1: Mudar nome do evento K-pop (linha 17)

| Atual | Novo |
|-------|------|
| "Campeonato K-POP Generations" | "Espaco K-pop" |

### Alteracao 2: Remover Raphael Freitas

Verificar se ainda existe alguma referencia ao guitarrista Raphael Freitas no cronograma e remover. Atualmente o cronograma ja foi atualizado com Pedro Azevedo as 14h.

Nao ha mais referencias a Raphael Freitas no cronograma atual.

---

## 7. Atualizar SEO

### `src/pages/ConcursoKpop.tsx`:
- Title: "Espaco K-pop 2026 - Apresentacao de Danca K-pop"
- Description: "Espaco K-pop no Friburgo Geek: apresentacao livre de danca K-pop! Vagas limitadas, sem competicao. Inscricao inclui entrada para ate 5 integrantes."

### `src/pages/Concursos.tsx`:
- Atualizar keywords para refletir "espaco k-pop" ao inves de "campeonato k-pop"

---

## Arquivos a Modificar

1. **`package.json`** - Adicionar framer-motion
2. **`src/pages/LineUp.tsx`** - Animacoes + cor do subtitulo
3. **`src/pages/ConcursoKpop.tsx`** - Transformar em "Espaco K-pop"
4. **`src/pages/Concursos.tsx`** - Atualizar descricao do K-pop
5. **`src/pages/Cronograma.tsx`** - Renomear evento para "Espaco K-pop"

---

## Resumo Visual

**Line-Up com animacoes:**
```text
[Card 1] -> fade in + slide up (delay 0s)
[Card 2] -> fade in + slide up (delay 0.1s)
[Card 3] -> fade in + slide up (delay 0.2s)
[Card 4] -> fade in + slide up (delay 0.3s)
```

**Cronograma atualizado:**
```text
16:00 | Espaco K-pop | STAGE Principal
```

