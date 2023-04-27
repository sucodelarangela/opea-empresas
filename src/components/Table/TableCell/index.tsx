import styles from './TableCell.module.sass';
import { IClient } from 'interfaces/IClient';
import { FaClipboardList } from 'react-icons/fa';

export const TableCell = (client: IClient) => {
  return (
    <div className={styles.tablecell}>
      <div className={styles.tablecell__icon}>
        <FaClipboardList size={20} />
      </div>
      <div className={styles.tablecell__info}>
        <h2>{client.name}</h2>
        <h3>CNPJ: {client.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')} - <span>Email: {client.email}</span></h3>
      </div>
    </div>
  );
};
