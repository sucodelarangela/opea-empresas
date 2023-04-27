import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Table } from 'components/Table';

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <Table />
      </main>
    </>
  );
}

export default App;
