


describe('My Frist Test', () =>
    {

        it('verify title-positive', () =>
        {

            //steps1
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.screenshot()
            cy.title()
            cy.title().should('eq','OrangeHRM')
            
            
        })

        it('verify title-Nagive test', ()=>
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.title().should('eq','OrangeHRM123')
        })

    })