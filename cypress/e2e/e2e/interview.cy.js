//import './commands';

describe('Form Test', () => {
    before('login', ()=>{
      cy.visit('https://demoqa.com/automation-practice-form');
    //   //cy.fixture('user').as('userData');
    //   cy.get('#firstName').type(firstName);
    //   cy.get('#lastName').type(lastName);
    //   cy.get('#userEmail').type(email);
    //   cy.get('label[for="gender-radio-1"]').click();
    //   cy.get('#submit').click();
    });
  
    it('should fill and submit form', function () {
      // cy.fillForm(this.userData);

      // cy.visit('https://demoqa.com/automation-practice-form');
      //cy.fixture('user').as('userData');
      cy.get('#firstName').type(firstName);
      cy.get('#lastName').type(lastName);
      cy.get('#userEmail').type(email);
      cy.get('label[for="gender-radio-1"]').click();
      // cy.get('#submit').click();
      // cy.get('.modal-title').should('contain.text', 'Thanks');
    });
  });