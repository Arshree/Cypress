import {orangeSelector, URL} from '../../support/selectors';
import {orglogin, userdetails} from '../../support/logindata';

describe('login', () => {
    before('login org', () =>{
        cy.login(URL.orgLogin2, orglogin.username, orglogin.password);
    });
    
    it('assert the Admin Tab', ()=>{
        cy.get(orangeSelector.search_box).click();
        cy.get(orangeSelector.side_bar).should('have.length', 11).first().click();
        // cy.get(orangeSelector.side_bar).should('have.length', 10).each((item, index) => {
        //     cy.wrap(item).should('contain.text', expectedMenuItems[index]);
        // });
        cy.get(':nth-child(2) > .oxd-input').type(userdetails.username);
        //cy.get(orangeSelector.user_Role).click();
    });
});