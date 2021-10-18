import React from 'react';
// import { render as rtlRender } from '@testing-library/react';
import { mount as cyMount } from '@cypress/react';
import { Provider } from 'react-redux';
// Import your own reducer
import { createStore } from 'redux';
import rootReducer from '../store/rootReducer';

function mount(ui, { store = createStore(rootReducer), ...renderOptions } = {}) {
  return cyMount(<Provider store={store}>{ui}</Provider>);
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { mount };
