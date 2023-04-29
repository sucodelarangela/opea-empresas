import styles from './TableCell.module.sass';
import { useState } from 'react';
import { IClient } from 'interfaces/IClient';
import { EditModal } from 'components/EditModal';
import { FaClipboardList } from 'react-icons/fa';

export const TableCell = (client: IClient) => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles.tablecell}
        tabIndex={0}
      >
        <div className={styles.tablecell__icon}>
          <FaClipboardList size={20} />
        </div>
        <div className={styles.tablecell__info}>
          <h2>{client.name}</h2>
          <h3>CNPJ: {client.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')} - <span>Email: {client.email}</span></h3>
        </div>
        <div className={styles.tablecell__action}>
          <button onClick={() => setEditModalOpen(true)}>Editar</button>
        </div>
      </div>

      {/* MODAL */}
      {editModalOpen && (
        <EditModal
          setEditModalOpen={setEditModalOpen}
          {...client}
        />
      )}
    </>
  );
};
