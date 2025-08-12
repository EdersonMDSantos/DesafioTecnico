# Desafio Técnico - QA Sênior (Softplan)

Projeto de automação de testes para o ServeRest (API + UI).
Automação de testes desenvolvida para o desafio técnico da vaga de QA Sênior na Softplan. O projeto cobre testes de API e UI da aplicação ServeRest utilizando Cypress, com foco em arquitetura limpa, gerenciamento de dados, validações robustas e boas práticas de automação. Inclui cenários de sucesso e falha, testes de login, fluxo de compra e gerenciamento de usuários e produtos.

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
