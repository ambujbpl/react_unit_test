/**
 * should render Hello with pass name in the props
 */

import { render, screen } from '@testing-library/react';
import { Name } from './Name';

test.skip('Should render the component', () => {
  render(<Name />);
  const textElement = screen.getByText(`Hello`);
  expect(textElement).toBeInTheDocument();
});

// test.only('Should render the name correctly', () => {
//     const name = "Ambuj";
//     render(<Name name={name} />)
//     const textElement = screen.getByText(`Hello ${name}`);
//     expect(textElement).toBeInTheDocument();
// });

/**
 * with describe
 */
describe('All name test group', () => {
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
});

/**
 * with nested describe
 */
describe('All name test group 1', () => {
  test('Should render the component', () => {
    render(<Name />);
    const textElement = screen.getByText(`Hello`);
    expect(textElement).toBeInTheDocument();
  });
  describe('All name test group 2', () => {
    test('Should render the name correctly', () => {
      const name = 'Ambuj';
      render(<Name name={name} />);
      const textElement = screen.getByText(`Hello ${name}`);
      expect(textElement).toBeInTheDocument();
    });
  });
});

/**
 * with nested describe
 */
describe.skip('All name test group 3', () => {
  test('Should render the component', () => {
    render(<Name />);
    const textElement = screen.getByText(`Hello`);
    expect(textElement).toBeInTheDocument();
  });
});
// describe.only('All name test group 4', () => {
//     test('Should render the name correctly', () => {
//         const name = "Ambuj";
//         render(<Name name={name} />)
//         const textElement = screen.getByText(`Hello ${name}`);
//         expect(textElement).toBeInTheDocument();
//     });
// });

/**
 * with it and skip and only
 */
it.skip('Should render the component skip', () => {
  render(<Name />);
  const textElement = screen.getByText(`Hello`);
  expect(textElement).toBeInTheDocument();
});
// it.only('Should render the name correctly', () => {
//     const name = "Ambuj";
//     render(<Name name={name} />)
//     const textElement = screen.getByText(`Hello ${name}`);
//     expect(textElement).toBeInTheDocument();
// });

/**
 * fix :- it with only
 * xit :- it with skip
 */
// fit('Should render the component', () => {
//     render(<Name />)
//     const textElement = screen.getByText(`Hello`);
//     expect(textElement).toBeInTheDocument();
// });
xit('Should render the name correctly', () => {
  const name = 'Ambuj';
  render(<Name name={name} />);
  const textElement = screen.getByText(`Hello ${name}`);
  expect(textElement).toBeInTheDocument();
});
