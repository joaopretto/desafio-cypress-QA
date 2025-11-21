export class AuthHelper{
    static loginAndSetToken(){
        const username = Cypress.env('USER_USERNAME');
        const password = Cypress.env('USER_PASS');
        const apiUrl = Cypress.env('API_URL');

        cy.request({
            method: 'POST',
            url: `${apiUrl}/auth/login`,
            body: {username, password},
        }).then((response) => {
            expect(response.status).to.eq(200);
            Cypress.env('token', response.body.token);
            cy.log("Token gerado e armazenado com sucesso.");
        });
    }

    static getToken(){
        return Cypress.env('token');
    }
}