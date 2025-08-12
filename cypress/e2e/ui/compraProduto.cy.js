// Testes de UI - Fluxo de Compra

describe('UI - Fluxo de Compra', () => {

  before(() => {
    cy.visit('https://front.serverest.dev/login')

    cy.get('[data-testid="email"]', { timeout: 10000 })
      .should('be.visible')
      .type('ns.qa@serverest.dev')

    cy.get('[data-testid="senha"]')
      .should('be.visible')
      .type('Newt@QA')

    cy.get('[data-testid="entrar"]').click()

    // ✅ Correção: valida a URL correta após login
    cy.url({ timeout: 10000 }).should('include', '/home')
  })

  it('Deve adicionar um produto ao carrinho e validar comportamento da página em construção', () => {
    // Aguarda renderização dos cards de produtos
    cy.get('.card', { timeout: 15000 }).should('exist')

    // Valida que há botões de adicionar visíveis
    cy.get('[data-testid="adicionarNaLista"]', { timeout: 15000 })
      .should('have.length.greaterThan', 0)

    // Captura o nome do primeiro produto e extrai o nome base
    cy.get('[data-testid="adicionarNaLista"]')
      .first()
      .parents('.card')
      .find('.card-title')
      .invoke('text')
      .then((nomeProduto) => {
        const partes = nomeProduto.trim().split(' ')
        const nomeBase = partes.slice(0, 2).join(' ') // Ex: "Produto Carrinho"

        // Adiciona o produto ao carrinho
        cy.get('[data-testid="adicionarNaLista"]')
          .first()
          .click()

        // Acessa o carrinho
        cy.get('[data-testid="carrinho"]').click()

        // Valida que a página está em construção
        cy.contains('Em construção aguarde', { timeout: 10000 })
          .should('be.visible')

        // Valida que o produto não aparece no carrinho
        cy.contains(nomeBase).should('not.exist')

        // Valida que o botão de finalizar compra não está disponível
        cy.get('[data-testid="finalizarCompra"]').should('not.exist')
      })
  })
})


