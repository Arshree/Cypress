import {URL, SELECTORS} from '../../support/selectors';
import { orglogin } from '../../support/logindata';

describe('My Frist Test', () =>
    {

        it('verify title-positive', () =>{
            //steps1
            cy.visit(URL.Login);
            //cy.screenshot()
            cy.title().should('eq', orglogin.title);
        });

        it('verify title-Nagive test', ()=>{
            cy.visit(URL.Login);
            // cy.title().Notshould('eq', 'Org123');
            cy.title().should('not.eq','OrangeHRM123');
        });

        it('login', () =>{
        cy.visit(URL.Login);
        cy.get(SELECTORS.user_name).type(orglogin.username);
        cy.get(SELECTORS.password).type(orglogin.password);
        cy.get(SELECTORS.submit_button).click();
        });

    });