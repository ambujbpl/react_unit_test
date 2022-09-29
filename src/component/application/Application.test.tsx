import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders', () => {
    render(<Application />);

    /** getByRole */
    const pageHeadingName = screen.getByRole('heading', {
      name: 'Job application form',
    });
    expect(pageHeadingName).toBeInTheDocument();

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole('button');
    expect(submitElement).toBeInTheDocument();
    // expect(submitElement).not.toBeEnabled();// lint error assertion 
    expect(submitElement).toBeDisabled();

    /** getByLabelText */

    const nameElement1 = screen.getByLabelText('Name'); //without selector
    expect(nameElement1).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' }); // with selector
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    /** getByText */

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const paragraphElement2 = screen.getByText('all fields', { exact: false }); // ignore case and full string match
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement1 = screen.getByText(/are/); // substring match regex
    expect(paragraphElement1).toBeInTheDocument();

    const paragraphElement3 = screen.getByText(/all/i); // substring match regex ignore case
    expect(paragraphElement3).toBeInTheDocument();

    const paragraphElement4 = screen.getByText(/^all fields are mandatory$/i); // fullstring match regex ignore case
    expect(paragraphElement4).toBeInTheDocument();

    const paragraphElement5 = screen.getByText((content) =>
      content.startsWith('All')
    ); // custom function match
    expect(paragraphElement5).toBeInTheDocument();

    const paragraphElement6 = screen.getByText((content) =>
      content.endsWith('mandatory')
    ); // custom function match
    expect(paragraphElement6).toBeInTheDocument();

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue('Anuj');
    expect(nameElement4).toBeInTheDocument();

    /** getByAltText */

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    /** getByTitle */

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    /** getByTestId */

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
  });
});
