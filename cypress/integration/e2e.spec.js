/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProdutos('Atlas Fitness Tank', 'XS', 'Blue', 1);
        cy.get('[class="product-block grid"]');
        cy.addProdutos('Apollo Running Short', '36', 'Black', 1),
            cy.get('.next').click();
        cy.addProdutos('Augusta Pullover Jacket', 'XL', 'Red', 2);
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();

        //cy.get('[class="button checkout]').click();
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();

        var dados = require('../fixtures/endereco.json') ;
        cy.endereco(dados.nome, dados.sobrenome, dados.nomeEmpresa, dados.pais, dados.endereco, dados.cidade, dados.Estado, dados.cep, dados.telefone, dados.email);

        cy.get('#terms').click();
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').should('contain', 'Obrigado.')





    });
})