import React from 'react';
import AddTask from '../AddTask';
import { mount, createTestStore } from '../../test-utils';
import faker from 'faker';

describe('<AddTask/>', () => {
  const store = createTestStore();
  const name = faker.lorem.sentence();
  const description = faker.lorem.sentences();
  beforeEach(() => {
    mount(<AddTask />, store);
  });

  it('renders without errors', () => {
    cy.findByRole('button', {
      name: /submit/i,
    });
  });

  it('renders validation error if submitted without name', () => {
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
    cy.findByText('name is a required field');
  });

  it('Should allow to add a new task item', () => {
    cy.findByRole('textbox', {
      name: /name \*/i,
    }).type(name);
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
  });

  it('should allow to select a date', () => {
    cy.findByRole('textbox', {
      name: /deadline/i,
    }).click();
    cy.get('.today').click();
  });

  it('it should allow you to submit a full form', () => {
    cy.findByRole('textbox', {
      name: /name \*/i,
    }).type(name);
    cy.findByRole('textbox', {
      name: /deadline/i,
    }).click();
    cy.get('.today').click();
    cy.findByRole('textbox', {
      name: /description/i,
    }).type(description);
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
    cy.findByRole('button', {
      name: /submitting.../i,
    });
  });
});
