

# Plano: Adicionar Link dos Concursos ao Menu

## Situacao Atual

O menu foi simplificado anteriormente e a opcao **Concursos** foi removida. A pagina `/concursos` continua existindo e funcionando, apenas o link de navegacao nao esta mais no Header.

---

## Alteracao Necessaria

### Arquivo: `src/components/Header.tsx`

Adicionar o link "Concursos" em dois lugares:

### 1. Menu Desktop (linhas 63-69)

Adicionar antes do link "Line-up":

```tsx
<Link 
  to="/concursos" 
  className="px-4 py-2 text-white text-sm font-semibold hover:bg-white/10 transition-colors rounded-full"
>
  Concursos
</Link>
```

### 2. Menu Mobile (linhas 157-163)

Adicionar antes do link "Line-up":

```tsx
<Link 
  to="/concursos" 
  onClick={() => setIsMenuOpen(false)}
  className="text-white font-semibold py-3 px-3 rounded-full hover:bg-white/10 transition-colors"
>
  Concursos
</Link>
```

---

## Menu Atualizado

**Ordem final:**

1. Home
2. O evento
3. Quem somos
4. Cronograma
5. **Concursos** ← Novo
6. Line-up
7. Contato

---

## Arquivo a Modificar

- `src/components/Header.tsx` - Adicionar link em ambos os menus (desktop e mobile)

