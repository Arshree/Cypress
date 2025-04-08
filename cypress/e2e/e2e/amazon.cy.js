import {SELECTOR} from '../../support/selectors';
import { login1 } from '../../support/logindata';


describe('Amazon testing', () =>{
    before('login', ()=>{
        cy.visit('https://www.amazon.in');
        cy.get('[id="nav-link-accountList-nav-line-1"]').click();
        cy.get('[id="ap_email_login"]').type(login1.username);
        cy.get('[id="continue"]').click();
        cy.get('[id="ap_password"]').type(login1.password);
        cy.get('[id="signInSubmit"]').click();
        //cy.get().type(login1.username);
    });

    it('select items', ()=>{

    });
});