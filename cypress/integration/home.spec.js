describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('contains "conduit"', () => {
    cy.contains('conduit');
    cy.contains('Home');
    cy.contains('Sign in');
    cy.contains('Sign up');
    cy.contains('Global Feed');
    cy.contains('Popular Tags');
  });
});
