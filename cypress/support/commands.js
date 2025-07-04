import {SELECTORS} from './selectors';

Cypress.Commands.add('login', (url, email, password) => {
    cy.visit(url);
    cy.get(SELECTORS.user_name).type(email);
    cy.get(SELECTORS.password).type(password);
    cy.get(SELECTORS.submit_button).click();
});