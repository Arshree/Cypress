import {amazonSelectors, URL} from '../../support/selectors';
import { login1 } from '../../support/logindata';


describe('Amazon testing', () =>{
    before('login', ()=>{
        cy.visit(URL.amzLogin);
        cy.get(amazonSelectors.account_signin_button).click();
        cy.get(amazonSelectors.email_field).type(login1.username);
        cy.get(amazonSelectors.continue_btn).click();
        cy.get(amazonSelectors.password).type(login1.password);
        cy.get(amazonSelectors.submit_button).click();
    });

    it('select items', ()=>{

    });
});