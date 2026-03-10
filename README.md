# 📚 MC Guias — Estudo Operacional

Site de estudo pessoal baseado nos guias rápidos operacionais de um fastfood fictício.

## 🗂️ Estrutura do Projeto

```
mcguias/
├── index.html              # Dashboard / Página inicial
├── css/
│   └── styles.css          # Estilos globais
├── js/
│   └── main.js             # JavaScript compartilhado (tabs, quiz, checklist)
├── pages/
│   ├── chapa.html          # Guia da Chapa
│   ├── lope.html           # Guia LOPE (Apoio e Preparação)
│   └── quiz.html           # Simulado geral
└── README.md
```

## 📖 Guias Disponíveis

| Guia | Conteúdo | Status |
|------|----------|--------|
| 🔥 Chapa | Temperaturas, procedimento carnes, bacon, limpeza | ✅ Disponível |
| 🥬 LOPE | Cebola, tomate, queijo, alface, bacon, rota ¼h | ✅ Disponível |
| *(em breve)* | Novos guias serão adicionados | 🔒 |

## ✨ Funcionalidades

- **Navegação por abas** em cada guia
- **Checklists interativos** com marcação de itens
- **Quiz/Simulado** com perguntas embaralhadas e feedback imediato
- **Simulado Geral** com filtro por guia
- **Design responsivo** para celular e desktop
- **Persistência de aba** via `sessionStorage`
- 
## 🔧 Adicionando um Novo Guia

1. Crie `pages/nome-guia.html` copiando a estrutura de `chapa.html` ou `lope.html`
2. Adicione o card na grade de guias em `index.html`
3. Adicione as perguntas do novo guia em `pages/quiz.html` no array `ALL_QUESTIONS`
4. Adicione o botão de filtro correspondente em `pages/quiz.html`

---

*Material de estudo pessoal. Não oficial.*
