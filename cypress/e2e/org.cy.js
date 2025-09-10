import {orangeSelector, URL} from '../support/selectors';
import {orgLogin, userDetails} from '../support/loginData';

describe('login', () => {
    before('login org', () =>{
        cy.login(URL.orgLogin2, orgLogin.username, orgLogin.password);
    });
    
    it('assert the Admin Tab', ()=>{
        cy.get(orangeSelector.search_box).click();
        cy.get(orangeSelector.side_bar).should('have.length', 11).first().click();
        // cy.get(orangeSelector.side_bar).should('have.length', 10).each((item, index) => {
        //     cy.wrap(item).should('contain.text', expectedMenuItems[index]);
        // });
        cy.get(':nth-child(2) > .oxd-input').type(userDetails.username);
        //cy.get(orangeSelector.user_Role).click();
    });
});