

# Plano: Redesign K-Stage Live (Espaco K-pop)

## Alteracoes Baseadas na Imagem de Referencia

### Estrutura Atual vs Nova

```text
ATUAL:                           NOVA (conforme imagem):
┌─────────────────────────┐     ┌─────────────────────────┐
│ 3 cards topo            │     │ 3 cards topo DIFERENTES │
│ (Vagas/Tempo/Data)      │     │ (Sem Competicao/Vagas/  │
│                         │     │  Data)                  │
├─────────────────────────┤     ├─────────────────────────┤
│ 3 cards separados       │     │ Secao motivacional      │
│ (Como Funciona/         │     │ (coracao + texto)       │
│  Musica/Regras)         │     ├─────────────────────────┤
│                         │     │ 1 UNICO card grande     │
│                         │     │ com 3 secoes dentro     │
└─────────────────────────┘     └─────────────────────────┘
```

---

## Arquivo: `src/pages/ConcursoKpop.tsx`

### 1. Atualizar os 3 Cards do Topo (linhas 102-127)

| Card | Atual | Novo (conforme imagem) |
|------|-------|------------------------|
| 1 | Vagas Limitadas + Users icon | **Sem Competicao** + Star icon + "Performance livre - e so subir e arrasar!" |
| 2 | Tempo Maximo + Clock icon | **Vagas Limitadas** + Users icon + "3 solos + 3 grupos" |
| 3 | Data do Evento + Calendar | **Data do Evento** + Calendar + "Domingo, 18 de Janeiro de 2026" |

**Icones a usar:**
- Card 1: `Star` (estrela) para "Sem Competicao"
- Card 2: `Users` para "Vagas Limitadas"
- Card 3: `Calendar` para "Data do Evento"

### 2. Adicionar Secao Motivacional (apos os cards do topo)

Nova secao entre os cards do topo e as informacoes:

```tsx
<div className="bg-primary/80 backdrop-blur-sm rounded-3xl p-8 mb-12 text-center">
  <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
    Se voce ama dancar e quer brilhar diante do publico, essa e a sua chance!
  </h2>
  <p className="text-accent font-semibold flex items-center justify-center gap-2">
    <Zap className="w-5 h-5" />
    Fique atento: as vagas sao limitadas!
  </p>
</div>
```

### 3. Consolidar Informacoes em UM UNICO Card (linhas 129-220)

**Substituir os 3 cards separados por 1 card unico** com as 3 secoes dentro:

```tsx
<Card className="bg-primary/80 backdrop-blur-sm border-0 rounded-3xl mb-12">
  <CardHeader>
    <CardTitle className="text-white text-xl font-black flex items-center gap-2">
      <FileText className="w-6 h-6" />
      INFORMACOES IMPORTANTES
    </CardTitle>
  </CardHeader>
  <CardContent className="text-white/90 space-y-6">
    {/* Como Funciona */}
    <div>
      <h3 className="text-accent font-bold mb-3">Como Funciona</h3>
      <ul>...</ul>
    </div>
    
    {/* Sobre a Musica */}
    <div>
      <h3 className="text-accent font-bold mb-3">Sobre a Musica</h3>
      <ul>...</ul>
    </div>
    
    {/* Regras Basicas */}
    <div>
      <h3 className="text-accent font-bold mb-3">Regras Basicas</h3>
      <ul>...</ul>
    </div>
  </CardContent>
</Card>
```

### 4. Atualizar Estilos Visuais

**Cards do topo:**
- Fundo: `bg-primary/60` (azul escuro semi-transparente)
- Bordas: remover borda accent, usar `border-0`
- Cantos: `rounded-2xl`

**Card de informacoes:**
- Fundo: `bg-primary/80` (azul escuro)
- Sem bordas visíveis
- Cantos arredondados: `rounded-3xl`

### 5. Atualizar Imports

Adicionar/atualizar imports:
```tsx
import { Star, Users, Calendar, Heart, Zap, FileText } from "lucide-react";
```

Remover imports nao utilizados:
- `Clock`
- `CheckCircle`
- `AlertTriangle`
- `FileAudio`

---

## Conteudo Atualizado (conforme imagem)

### Cards do Topo:
1. **Sem Competicao** - "Performance livre - e so subir e arrasar!"
2. **Vagas Limitadas** - "3 solos + 3 grupos"
3. **Data do Evento** - "Domingo, 18 de Janeiro de 2026"

### Informacoes Importantes:

**Como Funciona:**
- As inscricoes sao realizadas somente pelo formulario desta pagina
- As vagas serao preenchidas por ordem de inscricao
- A inscricao inclui a entrada no evento para ate 5 integrantes
- E uma apresentacao livre, sem juri ou competicao
- Tempo maximo de apresentacao: 5 minutos

**Sobre a Musica:**
- A musica deve estar no formato MP3 em um pen-drive
- Check-in ate as 13h no dia do evento
- A ordem de apresentacao sera definida pela organizacao

**Regras Basicas:**
- Proibido palavroes, apelo sexual desnecessario ou ofensas
- Proibido uso de armas ou acessorios que coloquem em risco os presentes
- Menores de idade precisam de autorizacao dos responsaveis
- Nao e permitido nada que suje o palco ou prejudique outras apresentacoes

---

## Arquivo a Modificar

- `src/pages/ConcursoKpop.tsx` - Redesign completo da secao de informacoes

