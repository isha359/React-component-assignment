import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './index';
import '@testing-library/jest-dom';

describe('InputField', () => {
  it('renders with a label', () => {
    render(<InputField label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('calls onChange handler when typing', () => {
    const handleChange = jest.fn();
    render(<InputField onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
