import {ALL_DATA} from '../supports/selectors';


describe('My Frist Test', () =>
    {

        it('verify title-positive', () =>
        {

            //steps1
            cy.visit(ALL_DATA.URL)
            cy.screenshot()
            cy.title()
            cy.title().should('eq','OrangeHRM')
            
            
        })

        it('verify title-Nagive test', ()=>
        {
            cy.visit(URL)
            cy.title().should('eq','OrangeHRM123')
        })

    })