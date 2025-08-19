import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import InputField from './index';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'This is a helper text.',
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
};

export const Invalid: Story = {
  args: {
    ...Default.args,
    invalid: true,
    errorMessage: 'This is an error message.',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password',
  },
};

export const WithClearButton: Story = {
  render: (args) => {
    const [value, setValue] = useState('Some text');
    return (
      <InputField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
      />
    );
  },
  args: {
    ...Default.args,
    label: 'Clearable Input',
    showClearButton: true,
  },
};
