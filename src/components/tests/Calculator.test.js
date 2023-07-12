import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('should multiply two numbers correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('screen')).toHaveTextContent('6');
  });

  // Write more test cases for other functionalities of the Calculator component

  // You can write similar tests for other React components
});
