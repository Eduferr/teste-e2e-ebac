class ProdutosPage {

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block')
            .contains(nomeProduto)
            .click()
    }

    buscarProdutoPeloNome(nomeProduto) {        
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    adicionarProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }

    BuscarProdutoUrl(nomeProduto) {
 
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

}

export default new ProdutosPage()