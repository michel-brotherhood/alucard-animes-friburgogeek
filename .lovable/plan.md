

# Plano: Ajustar Horários do Cronograma conforme Imagem

## Alterações em `src/pages/Cronograma.tsx`

Três linhas do array `stagePrincipal` precisam ser ajustadas:

| Linha | Atual | Novo |
|-------|-------|------|
| 28 | `time: "14:30"`, "Palestra com Dublador Pedro Azevedo" | `time: "14:00"`, "Dublador Convidado" |
| 29 | `time: "15:00"`, "K-Stage Live" | Mover para `time: "16:00"` |
| 31 | `time: "16:00"`, "Cosplay" | Mover para `time: "15:00"` |

O array reordenado ficará:
```
11:00 - Entrada VIPs/Cosplay
12:00 - Entrada Antecipados
12:00 - Cine Anime
13:00 - Gincanas
14:00 - Dublador Convidado
15:00 - Cosplay
15:30 - Encerramento Inscrições Cosplay (mantido)
16:00 - K-Stage Live
17:00 - Animekê
17:30 - Resultados/Campeonatos
17:40 - Sorteios
17:50 - Last Quizz (mantido)
18:00 - Encerramento
```

Itens que existem no cronograma mas não na imagem permanecem inalterados.

