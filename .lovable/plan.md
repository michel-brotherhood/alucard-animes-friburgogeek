

# Plano: Redesenhar Card do Pedro Azevedo Seguindo a Referência

## Design da Referência Analisado

O design de referência mostra:
- Cards com **borda gradiente** (rosa/roxo para ciano)
- **Imagem grande** no topo ocupando boa parte do card
- **Nome em branco** abaixo da imagem (não amarelo)
- **Descrição/bio completa** em texto claro
- **Botao "Conhecer mais"** com icone do Instagram em rosa/vermelho
- Background escuro (roxo/azul)

---

## Alteracoes no Card do Pedro Azevedo

### Estrutura do Card

```text
┌─────────────────────────────────────┐
│  ┌─────────────────────────────┐    │  <- Borda gradiente rosa/ciano
│  │                             │    │
│  │      [IMAGEM COMPLETA]      │    │  <- Imagem maior, sem corte
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│        Pedro Azevedo                │  <- Nome em branco, grande
│                                     │
│   Pedro Henrique Barros de          │
│   Azevedo (Niterói/RJ, 17 de        │  <- Bio completa em texto claro
│   outubro de 1990) é ator,          │
│   dublador, diretor de dublagem...  │
│                                     │
│   Destaques: Donkey Kong,           │
│   Hercules MCU, Dot Barrett...      │
│                                     │
│  ┌─────────────────────────────┐    │
│  │  [Instagram] Conhecer mais  │    │  <- Botao rosa com icone
│  └─────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

---

## Mudancas de Cor (Paleta do Site)

| Elemento | Atual (errado) | Novo (correto) |
|----------|----------------|----------------|
| Borda do card | `border-accent` (amarelo) | Gradiente `from-primary via-secondary to-cyan-400` |
| Background | `from-accent/20` | `bg-secondary/50` ou transparente |
| Nome | `text-accent` (amarelo) | `text-white` |
| Botao Instagram | Link amarelo | Botao `bg-primary` rosa/vermelho |
| Imagem | `h-48 object-cover` (cortada) | `aspect-[4/3]` ou maior, sem corte |

---

## Tecnica da Borda Gradiente

Para criar a borda gradiente como na referencia:

```tsx
{/* Container externo com gradiente */}
<div className="p-[3px] rounded-2xl bg-gradient-to-br from-primary via-secondary to-cyan-400">
  {/* Card interno com background solido */}
  <div className="bg-secondary rounded-2xl p-0 overflow-hidden">
    {/* Conteudo */}
  </div>
</div>
```

---

## Arquivo a Modificar

### `src/pages/LineUp.tsx` (linhas 40-88)

**Substituir o card atual por:**

1. **Container com borda gradiente** (rosa -> roxo -> ciano)
2. **Imagem maior** sem altura fixa, usando `aspect-[4/3]` para proporcao
3. **Nome em branco** (`text-white`) grande e bold
4. **Bio completa** com o release que voce forneceu
5. **Botao "Conhecer mais"** estilo pill rosa com icone do Instagram
6. **Cards "Em breve"** tambem com borda gradiente para manter consistencia

**Conteudo da Bio:**
> Pedro Henrique Barros de Azevedo (Niterói/RJ, 17 de outubro de 1990) é ator, dublador, diretor de dublagem e professor de língua estrangeira. Entre os destaques, estão Hércules no Universo Cinematográfico Marvel, Donkey Kong em Super Mario Bros. – O Filme, Dot Barrett (Mashle), Prowl (Transformers) e Harold (Bunnicula).

---

## Efeitos de Hover

- **Card**: `hover:scale-[1.02]` (escala sutil)
- **Card**: `hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]` (glow roxo)
- **Botao**: `hover:bg-primary/80` (escurecer levemente)
- **Imagem**: `group-hover:scale-105` (zoom suave na imagem)

---

## Grid Atualizado

Manter 4 colunas em desktop (`lg:grid-cols-4`), mas considerar 3 colunas se ficar melhor:

```text
[ Pedro Azevedo ] [ Em breve ] [ Em breve ] [ Em breve ]
```

---

## Resumo Visual

**ANTES:**
- Card amarelo, imagem cortada, nome amarelo, link simples

**DEPOIS:**
- Borda gradiente colorida (rosa/roxo/ciano)
- Imagem completa visivel
- Nome branco grande
- Bio completa
- Botao "Conhecer mais" rosa estilizado

