import { Clients } from 'api/api';
import { IClient } from 'interfaces/IClient';
import { useEffect, useState } from 'react';

function App() {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    Clients.getClients()
      .then(data => {
        setClients(data);
      });
  }, []);

  return (
    <main>
      {clients && clients.map(client => (
        <div key={client.id}>
          <p>{client.name}</p>
          <p>{client.email}</p>
          <p>{client.cnpj}</p>
        </div>
      ))}
    </main>
  );
}

export default App;
