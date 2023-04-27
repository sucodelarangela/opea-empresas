import styles from './Table.module.sass';
import { useEffect, useState } from 'react';
import { Clients } from 'api/api';
import { IClient } from 'interfaces/IClient';
import { TableCell } from './TableCell';
import { Button } from './Button';

export const Table = () => {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    Clients.getClients()
      .then(data => {
        setClients(data);
      });
  }, []);

  return (
    <section className={`container ${styles.table}`}>
      <Button />
      {clients && clients.map(client => (
        <TableCell
          key={client.id}
          {...client}
        />
      ))}
    </section>
  );
};
