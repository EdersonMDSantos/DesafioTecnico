// Testes de UI - Login

describe('UI - Login', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  it('Deve fazer login com sucesso', () => {
    cy.get('[data-testid="email"]', { timeout: 10000 })
      .should('be.visible')
      .type('ns.qa@serverest.dev')

    cy.get('[data-testid="senha"]', { timeout: 10000 })
      .should('be.visible')
      .type('Newt@QA')

    cy.get('[data-testid="entrar"]')
      .should('be.visible')
      .click()

    cy.url({ timeout: 10000 }).should('include', '/home')

    // Validação mais flexível e com timeout maior
    cy.contains(/Lista de Produtos|Lista de Compras|Produtos/i, { timeout: 10000 })
      .should('be.visible')
  })

  it('Não deve fazer login com senha incorreta', () => {
    cy.get('[data-testid="email"]', { timeout: 10000 })
      .should('be.visible')
      .type('ns.qa@serverest.dev')

    cy.get('[data-testid="senha"]', { timeout: 10000 })
      .should('be.visible')
      .type('senhaErrada')

    cy.get('[data-testid="entrar"]')
      .should('be.visible')
      .click()

    cy.contains('Email e/ou senha inválidos', { timeout: 10000 })
      .should('be.visible')
  })
})
