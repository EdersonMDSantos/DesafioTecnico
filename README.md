# Desafio Técnico - QA Sênior (Softplan)

Projeto de automação de testes para o ServeRest (API + UI).

## Tecnologias
- Cypress: v22.17.0
- JavaScript: v14.5.4
- Node.js: : ES6+

## Estrutura
```
cypress/
  e2e/
    api/
      usuarios.cy.js
      produtos.cy.js
    ui/
      login.cy.js
      compraProduto.cy.js
```

## Como executar
1. Instale dependências:
   ```bash
   npm install
   ```
2. Execute os testes:
   ```bash
   npx cypress open
   ```
