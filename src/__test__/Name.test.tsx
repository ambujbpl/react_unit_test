/**
 * should render Hello with pass name in the props
 */

import { render, screen } from '@testing-library/react';
import { Name } from './../component/name/Name';

test('Should render the component', () => {
  render(<Name />);
  const textElement = screen.getByText(`Hello`);
  expect(textElement).toBeInTheDocument();
});

test('Should render the name correctly', () => {
  const name = 'Ambuj';
  render(<Name name={name} />);
  const textElement = screen.getByText(`Hello ${name}`);
  expect(textElement).toBeInTheDocument();
});
