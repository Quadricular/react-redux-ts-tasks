// import function from the application source
import sum from '../common/foo';

describe('TypeScript spec', () => {
  it('works', () => {
    cy.wrap('foo').should('equal', 'foo');
  });

  it('calls TS source file', () => {
    cy.wrap(sum(1, 2, 3, 4)).should('equal', 10);
  });
});
