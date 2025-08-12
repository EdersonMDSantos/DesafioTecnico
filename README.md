# Desafio Técnico - QA Sênior (Softplan)  

Projeto de automação de testes para a aplicação **ServeRest** (API + UI).  
Desenvolvido para o desafio técnico da vaga de **QA Sênior** na Softplan.  

A automação foi criada utilizando **Cypress**, cobrindo cenários de API e interface gráfica (UI), com foco em:  
- Arquitetura limpa e organizada  
- Gerenciamento de dados de teste  
- Validações robustas  
- Boas práticas de automação  

Inclui testes para:  
- Autenticação (Login)  
- Cadastro e gerenciamento de usuários  
- Cadastro e gerenciamento de produtos  
- Fluxo de compra de produto  
- Cenários de sucesso e falha 

## Tecnologias
- Cypress: v22.17.0
- JavaScript: v14.5.4
- Node.js: : ES6+

## Estrutura
```
cypress/
    e2e/
      api/
       usuarios.cy.js # Testes da API de usuários
       produtos.cy.js # Testes da API de produtos
      ui/
       login.cy.js # Teste de login via UI
       compraProduto.cy.js # Fluxo de compra via UI
      cypress.config.js # Configuração do Cypress
      package.json # Dependências e scripts
```


## 🚀 Como executar os testes  

1️⃣ Clonar o repositório
```bash
git clone https://github.com/EdersonMDSantos/DesafioTecnico.git
cd DesafioTecnico
   ```
2️⃣ Instalar as dependências
 ```bash
   npm install
   ```
3️⃣ Executar os testes no modo interativo (GUI)
   ```bash
   npx cypress open
   ```
4️⃣ Executar os testes no modo headless (linha de comando)
  ```bash
   npx cypress run
   ```
5️⃣ Executar apenas um arquivo de teste específico
  ```bash
   npx cypress run --spec "cypress/e2e/api/usuarios.cy.js"
   ```


