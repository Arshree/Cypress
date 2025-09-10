import {URL, SELECTORS} from '../support/selectors';
import { orglogin } from '../support/loginData';

describe('My Frist Test', () => {

    before('login', () =>{
        cy.visit(URL.Login);
        cy.get(SELECTORS.user_name).type(orglogin.username);
        cy.get(SELECTORS.password).type(orglogin.password);
        cy.get(SELECTORS.submit_button).click();
        });

        it.skip('verify title-positive', () =>{
            //steps1
            cy.visit(URL.orgLogin, );
            //cy.screenshot()
            cy.title().should('eq', orglogin.title);
        });

        it.skip('verify title-Nagive test', ()=>{
            //cy.visit(URL.Login);
            // cy.title().Notshould('eq', 'Org123');
            cy.title().should('not.eq','OrangeHRM123');
        });

        // it('login', () =>{
        // cy.visit(URL.Login);
        // cy.get(SELECTORS.user_name).type(orglogin.username);
        // cy.get(SELECTORS.password).type(orglogin.password);
        // cy.get(SELECTORS.submit_button).click();
        // });

        it.skip('check menu', () =>{
            //cy.get(SELECTORS.menu).eq(1).should('have.text', 'Admin').click();
            cy.get(SELECTORS.menu).should('exist');
        });

    });


//    cy.visit("https://www.getcarnera.com/");

