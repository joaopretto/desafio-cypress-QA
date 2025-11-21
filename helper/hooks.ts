import {Before, After} from "@badeball/cypress-cucumber-preprocessor";
import { AuthHelper } from "./auth";

Before({ tags : "@auth"}, () => {
    cy.log("Iniciando Autenticação via Hooks...");
    AuthHelper.loginAndSetToken();
});

Before(() => {
    cy.log("Iniciando Teste...");
});