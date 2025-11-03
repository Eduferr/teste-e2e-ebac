/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente, quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });
    

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {


        // //1º produto a ser adicionado
        // produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        // produtosPage.adicionarProdutoCarrinho('XL', 'Red', 2)
        // //cy.get('.woocommerce-message').should('contain', 2 + ' × “' + 'Ariel Roll Sleeve Sweatshirt' + '”')

        // //2º produto a ser adicionado
        // produtosPage.buscarProdutoPeloNome('Taurus Elements Shell')
        // produtosPage.adicionarProdutoCarrinho('M', 'Yellow', 3)
        // //cy.get('.woocommerce-message').should('contain', 3 + ' × “' + 'Taurus Elements Shell' + '”')

        // //3º produto a ser adicionado
        // cy.fixture('produtos').then(dados => {
        //     let posicaolista = 0
        //     produtosPage.buscarProdutoPeloNome(dados[posicaolista].nomeProduto)
        //     produtosPage.adicionarProdutoCarrinho(
        //         dados[posicaolista].tamanho,
        //         dados[posicaolista].cor,
        //         dados[posicaolista].quant)
        //     //cy.get('.woocommerce-message').should('contain', dados[posicaolista].nomeProduto)
        // })

        //4º produto a ser adicionado
        produtosPage.BuscarProdutoUrl('Zeppelin Yoga Pant')
        produtosPage.adicionarProdutoCarrinho('34', 'Red', 2)
        //  cy.get('.woocommerce-message').should('exist')

        //Verificando Carrinho
        cy.get('.woocommerce-message > .button').click()

        //Concluir Compra
        cy.get('.checkout-button').click()

        //Cadastrando novo cliente
        cy.novoCliente()

        //Forma de pagamento
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()

        //Finalizar compra
        cy.get('#place_order').click()
        cy.get('.page-title').should('exist')

    });

})