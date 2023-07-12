import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

it('render correctly and mathes the snapshot', () => {
  const { asFragment } = render(<Quote />);
  expect(asFragment()).toMatchSnapshot();
});
