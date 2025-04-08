import { SELECTORS, URL } from '../../support/selectors';
import { orglogin } from '../../support/logindata'

describe('frist integration', () =>{

    it('login', () =>{
        cy.visit(URL.Login);
        cy.get(SELECTORS.user_name).type(orglogin.username);
        cy.get(SELECTORS.password).type(orglogin.password);
        cy.get(SELECTORS.submit_button).click();
    });
    
    it('check menu', () =>{
        cy.get(SELECTORS.menu).eq(1).should('have.text', 'Admin').click();
    });

});