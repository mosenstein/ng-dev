/// <reference types="Cypress" />

context('Demos', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200/demos/');
  });

  describe('Left Menu', () => {
    it('Has 11 options in Testing menu', () => {
      // cy.get('.clickable').first().click();
      cy.get('button.mat-raised-button').should('have.length', 14);
    });

    it('Shows the correct content when clicking test pipe', () => {
      // cy.get('.clickable').first().click();
      cy.contains('Test Pipe').click({ force: true });
      cy.contains('TestPipeComponent');
    });
  });
});
