class HomePage{
    elements = {
        userNameInput: () => cy.get("#user-name"),
        passwordInput: () => cy.get("#password"),
        loginButton: () => cy.get("#login-button"),
    }

    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    formularioLogin(username: string, passowrd: string){
        this.elements.userNameInput().type(username);
        this.elements.passwordInput().type(passowrd);

        cy.log("Usuario: " + username + " Senha: " + passowrd);
    }

    botao(){
        this.elements.loginButton().click();
    }

    validacaoUrl(urlEsperada: string ){
        cy.url().should('contain', urlEsperada);
    }
}

export default new HomePage();