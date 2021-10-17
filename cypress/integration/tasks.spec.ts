/* eslint-disable jest/expect-expect */
describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3001');
  });

  it('should render OK', async () => {
    cy.title().should('eq', 'Tasks App');
  });

  it('displays 15 todo items by default', () => {
    cy.findByRole('list');
  });
});
