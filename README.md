# 📚 MC Guias — Estudo Operacional

Site de estudo pessoal baseado nos guias rápidos operacionais do McDonald's (Arcos Dourados S.A.).

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

## 🚀 Como Usar

Clone o repositório e abra `index.html` no navegador — não requer servidor ou build.

```bash
git clone https://github.com/seu-usuario/mcguias.git
cd mcguias
# Abra index.html no navegador
```

## 🌐 GitHub Pages

Para publicar via GitHub Pages:

1. Vá em **Settings → Pages**
2. Em **Source**, selecione `Deploy from a branch`
3. Escolha a branch `main` e pasta `/ (root)`
4. Acesse em: `https://seu-usuario.github.io/mcguias`

## 🔧 Adicionando um Novo Guia

1. Crie `pages/nome-guia.html` copiando a estrutura de `chapa.html` ou `lope.html`
2. Adicione o card na grade de guias em `index.html`
3. Adicione as perguntas do novo guia em `pages/quiz.html` no array `ALL_QUESTIONS`
4. Adicione o botão de filtro correspondente em `pages/quiz.html`

---

*Material de estudo pessoal. Não oficial.*
