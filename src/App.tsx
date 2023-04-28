import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Search } from 'components/Search';
import { Table } from 'components/Table';
import { ClientProvider } from 'context/ClientContext';

function App() {
  return (
    <ClientProvider>
      <Header />
      <main>
        <Search />
        <Table />
      </main>
      <Footer />
    </ClientProvider>
  );
}

export default App;
