// import function from the application source
import sum from '../../src/components/common/foo';

describe('TypeScript spec', () => {
  it('works', () => {
    cy.wrap('foo').should('equal', 'foo');
  });

  it('calls TS source file', () => {
    expect(sum(1, 2, 3, 4)).equal(10);
  });
});
