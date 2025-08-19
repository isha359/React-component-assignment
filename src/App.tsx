import InputField from './components/InputField';
import DataTable, { type Column } from './components/DataTable';

const App = () => {
  interface UserData {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const columns: Column<UserData>[] = [
    { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
    { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
    { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
    { key: 'email', title: 'Email', dataIndex: 'email' },
  ];

  const data: UserData[] = [
    { id: 1, name: 'John Doe', age: 32, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
    { id: 3, name: 'Sam Green', age: 45, email: 'sam.green@example.com' },
    { id: 4, name: 'Alice Brown', age: 23, email: 'alice.brown@example.com' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Component Demo</h1>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">InputField</h2>
        <div className="flex flex-col gap-4">
          <InputField label="Name" placeholder="Enter your name" />
          <InputField label="Password" type="password" placeholder="Enter your password" />
        </div>
      </div>

      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">DataTable</h2>
        <DataTable columns={columns} data={data} selectable />
      </div>
    </div>
  );
};

export default App;
