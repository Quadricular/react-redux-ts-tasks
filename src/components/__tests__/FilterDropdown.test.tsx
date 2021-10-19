import React from 'react';
import FilterDropdown from '../FilterDropdown';
import { mount, createTestStore } from '../../test-utils';
import { SortingFilters } from '../../store/constants';

describe('<FilterDropdown/>', () => {
  const store = createTestStore();
  beforeEach(() => {
    mount(<FilterDropdown />, store);
  });

  it('renders using default state (Deadline Ascending) without errors and selects Deadline Descending', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.DEADLINE_ASCENDING,
    );
    cy.findByRole('combobox').select(SortingFilters.DEADLINE_DESCENDING);

    cy.findByRole('option', { name: 'Deadline (Descending)' });
  });

  it('updates store visibility to Deadline (Descending) and selects Created (Ascending)', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.DEADLINE_DESCENDING,
    );
    cy.findByRole('combobox').select(SortingFilters.CREATED_ASCENDING);
  });

  it('updates store visibility to Created (Ascending) and selects Created (Descending)', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.CREATED_ASCENDING,
    );
    cy.findByRole('combobox').select(SortingFilters.CREATED_DESCENDING);
  });

  it('updates store visibility to Created (Descending) after select', () => {
    cy.wrap(store.getState().filters.sorting).should(
      'eq',
      SortingFilters.CREATED_DESCENDING,
    );
  });
});
