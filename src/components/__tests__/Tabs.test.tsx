import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tabs from '../Tabs';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('<Tabs />', () => {
  it('renders without errors', () => {
    render(<Tabs />);
  });
});
