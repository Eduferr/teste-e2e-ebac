import { faker } from '@faker-js/faker';

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('novoCliente', () => {

    let nome = faker.person.firstName()
    let sobrenome = faker.person.lastName()
    let email = faker.internet.email(nome)
    let endereco = 'QNL 11 Bloco D'
    let cidade = 'Taguatinga Norte'
    //let uf = "Distrito Federal"
    let cep = '01010-000'
    let telefone = '11 98765-4321'
    let senha = '123456'

    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_address_1').type(endereco)
    cy.get('#billing_city').type(cidade)
    //cy.get('#select2-billing_state-container').select('uf')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)
    cy.get('#createaccount').click()
    cy.get('#account_password').type(senha)
})

