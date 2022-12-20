import React from 'react';
import { mount, createTestStore } from '../../test-utils';
import { createMemoryHistory } from 'history';

import App from '../App';

describe('<App />', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    const store = createTestStore();
    mount(<App store={store} history={history} />);
  });

  // it('redirects from home to tasks page', () => {
  //   history.push('/');
  //   cy.findAllByText(/loading\.\.\./i);
  //   cy.findByRole('heading', { name: /tasks/i });
  // });

  it('it displays an error when consulting a bad route', () => {
    history.push('/bad-route');
    cy.findAllByRole('heading').contains('404');
  });

  it('displays 15 todo items by default', () => {
    history.push('/tasks');
    cy.findAllByRole('listitem').should('have.length', 15);
  });
});
