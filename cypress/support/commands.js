import {SELECTORS, amazonSelectors} from './selectors';

Cypress.Commands.add('login', (url, email, password) => {
    cy.visit(url);
    cy.get(SELECTORS.user_name).type(email);
    cy.get(SELECTORS.password).type(password);
    cy.get(SELECTORS.submit_button).click();
});

Cypress.Commands.add('search', (search_element) => {
    cy.get(SELECTORS.search).type(search_element);
    cy.get(SELECTORS.search).click();
})

Cypress.Commands.add('amazonLogin', (url, email, password) =>{
     cy.visit(url);
        cy.get(amazonSelectors.account_signin_button).click();
        cy.get(amazonSelectors.email_field).type(email);
        cy.get(amazonSelectors.continue_btn).click();
        cy.get(amazonSelectors.password).type(password);
        cy.get(amazonSelectors.submit_button).click();
});