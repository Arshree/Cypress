import {orangeSelector, URL} from '../../support/selectors';
import {orglogin} from '../../support/logindata';
import {expectedMenuItems} from '../../constants/projects';

describe('login', () => {
    before('login org', () =>{
        cy.login(URL.orgLogin2, orglogin.username, orglogin.password);
    });
    
    it('assert the side bar menu', ()=>{
        cy.get(orangeSelector.search_box).click();
        cy.get(orangeSelector.side_bar).should('have.length', 10).first().click();
        // cy.get(orangeSelector.side_bar).should('have.length', 10).each((item, index) => {
        //     cy.wrap(item).should('contain.text', expectedMenuItems[index]);
        // });
        
    });
});