import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { ApiClient } from "../../../utils/apiClient";
import HomePage  from  "../../../pages/HomePage";

let apiResponse: any;

Given("faco login com um usuario valido", () =>{
    cy.log("Token verificado: " + Cypress.env('token'));
});

When("faco uma chamada na requisicao GET para {string}", (endpoint: string) => {
    ApiClient.get(endpoint).then((response) => {
        apiResponse = response;
    });
});

Then("a reposta deve ser {int}", (statusCode: number) => {
    expect(apiResponse.status).to.eq(statusCode);
});

Then("o valor do campo {string} deve ser {string}", (field: string, value: string) => {
    expect(apiResponse.body[field]).to.eq(value);
});

Given("eu acesso a pagina de login",() => {
    HomePage.visit();
});

When("preencho os campos com o usuario {string} e senha {string}", (username: string, password: string) =>{ 
    HomePage.formularioLogin(username, password);
});

When("clico no botao de confirmar", () => {
    HomePage.botaoConfirmar();
});

Then("devo ser direcionado para a pagina {string}", (urlEsperada: string) => {
    HomePage.validacaoUrl(urlEsperada);
});

When("adiciono os produtos abaixo ao carrinho", (datatable: DataTable) => {
    datatable.hashes().forEach((row) => {
        const productName = row['nome do produto'];
        HomePage.selecioneProduto(productName);
    });
});

When("clico no carrinho de compras", () => {
    HomePage.carrinhoDeCompras();
});

Then("valido se os produtos abaixo foram adicionados no carrinho", (datatable: DataTable) => {
    datatable.hashes().forEach((row) => {
        const productName = row['nome do produto'];
        HomePage.validacaoDeProdutos(productName);
    });
});

