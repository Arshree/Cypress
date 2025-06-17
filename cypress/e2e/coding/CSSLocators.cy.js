
import {ALL_DATA} from '../supports/selectors';

describe('CSSLocator', () =>
{
    it("csslocators", () =>
    {
        cy.visit(ALL_DATA.URL2)
        cy.get("input[name='username']").type("Admin")

        cy.get("input[name='password']").type("admin123")

        cy.get("[type='submit']").click()
        cy.title()


    })
}
)