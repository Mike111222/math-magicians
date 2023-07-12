import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Layout from '../Layout';

it('render correctly and mathes the snapshot', () => {
  const { asFragment } = render(
    <HashRouter>
      {' '}
      <Layout />
    </HashRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
