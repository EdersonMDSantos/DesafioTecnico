// Testes de API - Usuários

describe('API - Usuários', () => {
  let userEmail

  beforeEach(() => {
    userEmail = `qa_${Date.now()}@serverest.dev`
  })

  it('Deve criar usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: "Newt Scamander",
        email: userEmail,
        password: "Newt@QA",
        administrador: "true"
      }
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq("Cadastro realizado com sucesso")
      expect(res.body._id).to.exist
    })
  })

  it('Não deve criar usuário com e-mail duplicado', () => {
    const emailDuplicado = "ns.qa@serverest.dev"

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      failOnStatusCode: false,
      body: {
        nome: "Newt Scamander",
        email: emailDuplicado,
        password: "Newt@QA",
        administrador: "true"
      }
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.eq("Este email já está sendo usado")
    })
  })

  it('Deve fazer login válido', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: "ns.qa@serverest.dev",
        password: "Newt@QA"
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq("Login realizado com sucesso")
      expect(res.body.authorization).to.exist
    })
  })
})
