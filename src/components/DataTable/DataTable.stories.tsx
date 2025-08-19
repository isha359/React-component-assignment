import type { Meta, StoryObj } from '@storybook/react';
import DataTable, { type Column } from './index';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface UserData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const columns: Column<UserData>[] = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'age',
    title: 'Age',
    dataIndex: 'age',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
];

const data: UserData[] = [
  { id: 1, name: 'John Doe', age: 32, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
  { id: 3, name: 'Sam Green', age: 45, email: 'sam.green@example.com' },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
    onRowSelect: (selectedRows) => {
      console.log('Selected Rows:', selectedRows);
    },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    data: [],
  },
};
