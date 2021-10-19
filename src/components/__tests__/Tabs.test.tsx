import React from 'react';
import Tabs from '../Tabs';
import { mount, createTestStore } from '../../test-utils';
import { VisibilityFilters } from '../../store/constants';

describe('<Tabs/>', () => {
  const store = createTestStore();
  beforeEach(() => {
    mount(<Tabs />, store);
  });

  it('renders default state without errors', () => {
    cy.wrap(store.getState().filters.visibility).should('eq', VisibilityFilters.SHOW_ALL);
    cy.findByRole('button', { name: /completed/i }).click();
  });

  it('updates store visibility to completed after click', () => {
    cy.wrap(store.getState().filters.visibility).should(
      'eq',
      VisibilityFilters.SHOW_COMPLETED,
    );
    cy.findByRole('button', { name: /active/i }).click();
  });

  it('updates store visibility to active after click', () => {
    const visibility = store.getState().filters.visibility;
    cy.wrap(visibility).should('eq', VisibilityFilters.SHOW_ACTIVE);
  });
});
