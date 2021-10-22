import React from 'react';
import FilterDropdown from '../FilterDropdown';
import { mount, createTestStore } from '../../test-utils';
import { SortingFilters } from '../../store/constants';

describe('<FilterDropdown/>', () => {
  const store = createTestStore();
  beforeEach(() => {
    mount(<FilterDropdown />, store);
    cy.findByRole('button', { name: /select date range/i }).click();
  });
  afterEach(() => {
    cy.findByRole('button', { name: /select date range/i }).click();
  });

  it('renders using default state (Deadline Ascending) without errors and selects Deadline Descending', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.DEADLINE_ASCENDING,
    );
    // cy.findByRole('combobox').select(SortingFilters.DEADLINE_DESCENDING);

    // cy.findByRole('option', { name: 'Deadline (Descending)' });
    cy.findByRole('button', {
      name: /deadline \(descending\)/i,
    }).click();
  });

  it('updates store visibility to Deadline (Descending) and selects Created (Ascending)', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.DEADLINE_DESCENDING,
    );
    cy.findByRole('button', { name: /created \(ascending\)/i }).click();
  });

  it('updates store visibility to Created (Ascending) and selects Created (Descending)', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.CREATED_ASCENDING,
    );
    cy.findByRole('button', {
      name: /created \(descending\)/i,
    }).click();
  });

  it('updates store visibility to Created (Descending) after select', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.CREATED_DESCENDING,
    );
  });
});
