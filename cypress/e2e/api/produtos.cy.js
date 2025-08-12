// Testes de API - Produtos

describe('API - Produtos', () => {
  let token
  let produtoId
  const emailAdmin = `admin_${Date.now()}@serverest.dev`

  before(() => {
    // 1. Cadastrar usuário administrador
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Admin',
        email: emailAdmin,
        password: 'Soft@Plan1108',
        administrador: 'true'
      }
    }).then((res) => {
      expect(res.status).to.eq(201)

      // 2. Fazer login com usuário administrador
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: emailAdmin,
          password: 'Soft@Plan1108'
        }
      }).then((res) => {
        expect(res.status).to.eq(200)
        token = res.body.authorization

        // 3. Criar produto fixo para teste de duplicidade (com tolerância ao erro 400)
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/produtos',
          failOnStatusCode: false,
          headers: { authorization: token },
          body: {
            nome: "Produto QA FIXO",
            preco: 2500,
            descricao: "Produto original",
            quantidade: 2
          }
        }).then((res) => {
          expect([201, 400]).to.include(res.status)
          if (res.status === 201) {
            expect(res.body.message).to.eq("Cadastro realizado com sucesso")
          } else {
            expect(res.body.message).to.eq("Já existe produto com esse nome")
          }
        })
      })
    })
  })

  it('Deve criar produto com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      headers: { authorization: token },
      body: {
        nome: `Produto QA ${Date.now()}`,
        preco: 3500,
        descricao: "Notebook para testes automatizados",
        quantidade: 5
      }
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq("Cadastro realizado com sucesso")
      produtoId = res.body._id
    })
  })

  it('Não deve criar produto com nome duplicado', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      failOnStatusCode: false,
      headers: { authorization: token },
      body: {
        nome: "Produto QA FIXO",
        preco: 2500,
        descricao: "Produto duplicado",
        quantidade: 2
      }
    }).then((res) => {
      expect(res.status).to.eq(400)
      expect(res.body.message).to.eq("Já existe produto com esse nome")
    })
  })

  it('Deve listar produtos', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/produtos'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('Deve deletar produto criado', () => {
    cy.request({
      method: 'DELETE',
      url: `https://serverest.dev/produtos/${produtoId}`,
      headers: { authorization: token }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq("Registro excluído com sucesso")
    })
  })
})
