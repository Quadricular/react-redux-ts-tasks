import React from 'react';
import Tabs from '../Tabs';
import { mount } from '../../test-utils';

describe('<Tabs/>', () => {
  it('renders without errors', () => {
    mount(<Tabs />);

    cy.findByRole('button', { name: /active/i }).click();

    cy.findByRole('button', { name: /completed/i }).click();
  });
});
