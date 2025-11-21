class HomePage{
    elements = {
        userNameCampo: () => cy.get("#user-name"),
        passwordCampo: () => cy.get("#password"),
        Botao: () => cy.get("#login-button, [id='add-to-cart'], [id='back-to-products']"),
        produto: () => cy.get("[class='inventory_item_label'], [class='inventory_item_name']"),
        carrinho: () => cy.get("[class='shopping_cart_link']")
    }

    visit(){
        cy.visit('https://www.saucedemo.com/');
    };

    formularioLogin(username: string, passowrd: string){
        this.elements.userNameCampo().type(username);
        this.elements.passwordCampo().type(passowrd);

        cy.log("Usuario: " + username + " Senha: " + passowrd);
    };

    botaoConfirmar(){
        this.elements.Botao().click();
    };

    botaoVoltar(){
        this.elements.Botao().click();
    };

    validacaoUrl(urlEsperada: string ){
        cy.url().should('contain', urlEsperada);
    };

    selecioneProduto(nomeProduto: string){
        this.elements.produto().contains(nomeProduto).click();
        this.elements.Botao().contains('Add to cart').click();
        this.botaoVoltar();
    };

    carrinhoDeCompras(){
        this.elements.carrinho().click();
    };

    validacaoDeProdutos(nomeProduto: string){
        this.elements.produto().contains(nomeProduto).should('be.visible');
    };
}

export default new HomePage();