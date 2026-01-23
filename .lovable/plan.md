
# Plano: Contador Regressivo e Vídeo do Hero

## Resumo das Alterações

Este plano adiciona o contador regressivo à homepage e troca o vídeo do Hero para o vídeo anterior do evento.

---

## 1. Adicionar Contador Regressivo na Homepage

### Arquivo: `src/pages/Index.tsx`

O componente `Countdown` já existe e está configurado para a data correta (15/03/2026). Só preciso adicioná-lo na homepage.

**Alteração:**
```tsx
// Adicionar import
import Countdown from "@/components/Countdown";

// Adicionar após o Hero
<Header />
<Hero />
<Countdown />  // <-- Novo
<EventInfo />
```

**Resultado:** Contador aparecerá logo abaixo do Hero, mostrando dias, horas, minutos e segundos até o evento.

---

## 2. Botão Flutuante com Logo

O botão flutuante já está usando a logo! O componente `FloatingMenu.tsx` já importa e usa:
- `nova_logo_balao_frente.svg` (quando fechado)
- `verso_novo.svg` (quando aberto)

**Nenhuma alteração necessária** - já está implementado conforme desejado.

---

## 3. Trocar Vídeo do Hero

### Arquivo: `src/components/Hero.tsx`

Trocar de `hero-video-new.mp4` para `hero-video.mp4` (vídeo anterior do evento).

**Linha 3:**
```tsx
// De:
import heroVideo from "@/assets/hero-video-new.mp4";

// Para:
import heroVideo from "@/assets/hero-video.mp4";
```

---

## Resumo Visual

| Alteração | Arquivo | Descrição |
|-----------|---------|-----------|
| Contador | `Index.tsx` | Adicionar `<Countdown />` após Hero |
| Logo flutuante | - | Já está implementado |
| Vídeo anterior | `Hero.tsx` | Trocar import para `hero-video.mp4` |

---

## Arquivos a Modificar

1. `src/pages/Index.tsx` - Adicionar import e componente Countdown
2. `src/components/Hero.tsx` - Trocar import do vídeo
