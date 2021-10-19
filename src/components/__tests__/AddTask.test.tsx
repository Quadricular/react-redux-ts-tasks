import React from 'react';
import AddTask from '../AddTask';
import { mount, createTestStore } from '../../test-utils';
import faker from 'faker';

describe('<AddTask/>', () => {
  const store = createTestStore();
  const name = faker.lorem.sentence();
  beforeEach(() => {
    mount(<AddTask />, store);
  });

  it('renders without errors', () => {
    cy.findByRole('heading', { name: /add task/i });
  });

  it('renders validation error if submitted without name', () => {
    cy.findByText('Add').click();
    cy.findByText('name is a required field');
  });

  it('Should allow to add a new task item', () => {
    cy.findByLabelText('name').type(name);
    cy.findByText('Add').click();
  });

  // it('new added item matches the store', () => {});
});
