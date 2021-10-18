import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

describe('<App />', () => {
  it('renders without errors', () => {
    mount(<App />);
    // cy.get('a').contains('Learn React');
  });
});
