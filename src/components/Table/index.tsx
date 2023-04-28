import styles from './Table.module.sass';
import { TableCell } from './TableCell';
import { Button } from './Button';
import { useClientContext } from 'context/ClientContext';
import { Loader } from 'components/Loader';

export const Table = () => {
  const { clients, error, loading } = useClientContext();

  return (
    <section className={`container ${styles.table}`}>
      <Button />
      {error && <p>{error}</p>}
      {loading && <Loader />}
      {clients && clients.map(client => (
        <TableCell
          key={client.id}
          {...client}
        />
      ))}
    </section>
  );
};
