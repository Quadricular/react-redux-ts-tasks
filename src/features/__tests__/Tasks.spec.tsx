import React from 'react';
import { mount } from '../../test-utils';

import Tasks from '../Tasks';

describe('<Tasks />', () => {
  beforeEach(() => {
    mount(<Tasks />);
  });

  it('finds and displays the page heading', () => {
    cy.findByRole('heading', { name: /tasks/i });
  });

  it('displays 15 todo items by default', () => {
    cy.findAllByRole('listitem').should('have.length', 15);
  });
});
