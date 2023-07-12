import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

test('render correctly and matches the home snapshot', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
