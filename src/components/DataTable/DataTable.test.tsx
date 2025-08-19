import { render, screen } from '@testing-library/react';
import DataTable, { type Column } from './index';
import '@testing-library/jest-dom';

interface TestData {
  id: number;
  name: string;
}

const columns: Column<TestData>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id' },
  { key: 'name', title: 'Name', dataIndex: 'name' },
];

const data: TestData[] = [
  { id: 1, name: 'Test 1' },
  { id: 2, name: 'Test 2' },
];

describe('DataTable', () => {
  it('renders the correct headers', () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('renders the correct number of rows', () => {
    render(<DataTable columns={columns} data={data} />);
    const rows = screen.getAllByRole('row');
    // Header row + data rows
    expect(rows).toHaveLength(data.length + 1);
  });
});
