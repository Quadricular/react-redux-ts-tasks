import React from 'react';
import { mount } from '../../test-utils';
import faker from 'faker';
import Tasks from '../../pages/Tasks';

describe('<EditTask/>', () => {
  const name = faker.lorem.sentence();
  const description = faker.lorem.sentences();
  beforeEach(() => {
    mount(<Tasks />);
    cy.findAllByRole('listitem').should('have.length', 15);

    cy.findAllByRole('button', {
      name: /edit/i,
    })
      .first()
      .click();
    cy.findByText(/edit task/i);
    // mount(<EditTask />, store);
  });

  it('renders without errors', () => {
    cy.findByRole('button', {
      name: /submit/i,
    });
  });

  it('renders validation error if submitted without name', () => {
    cy.findByRole('textbox', {
      name: /name \*/i,
    }).clear();
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
    cy.findByText('name is a required field');
  });

  it('Should allow to edit a new task item', () => {
    cy.findByRole('textbox', {
      name: /name \*/i,
    })
      .clear()
      .type(name);
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
  });

  it('should allow to change the date', () => {
    cy.findByRole('textbox', {
      name: /deadline/i,
    }).click();
    cy.get('.today').click();
  });

  it('it should allow you to edit the full form', () => {
    cy.findByRole('textbox', {
      name: /name \*/i,
    })
      .clear()
      .type(name);
    cy.findByRole('textbox', {
      name: /deadline/i,
    }).click();
    cy.get('.today').click();
    cy.findByRole('textbox', {
      name: /description/i,
    })
      .clear()
      .type(description);
    cy.findByRole('button', {
      name: /submit/i,
    }).click();
    cy.findByRole('button', {
      name: /submitting.../i,
    });
  });
});
