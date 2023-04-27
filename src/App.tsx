import { useEffect, useState } from 'react';
import { Clients } from 'api/api';
import { IClient } from 'interfaces/IClient';
import { Header } from 'components/Header';
import { Search } from 'components/Search';

function App() {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    Clients.getClients()
      .then(data => {
        setClients(data);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Search />
        {clients && clients.map(client => (
          <div key={client.id}>
            <p>{client.name}</p>
            <p>{client.email}</p>
            <p>{client.cnpj}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
