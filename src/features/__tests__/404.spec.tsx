import React from 'react';
import { mount } from '../../test-utils';
import NotFoundPage from '../404';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('<404 />', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    mount(
      <Router history={history}>
        <NotFoundPage />
      </Router>,
    );
  });

  it('finds and displays error in page heading', () => {
    cy.findAllByRole('heading').contains('404');
  });

  it('displays clickable button back to home', () => {
    cy.findByRole('link', { name: /back to home/i }).click();
  });
});
