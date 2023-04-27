import styles from './Button.module.sass';
import { FaClipboardList } from 'react-icons/fa';
import { Modal } from 'components/Modal';
import { useState } from 'react';

export const Button = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => setModalOpen(!modalOpen)}
      >
        <div className={styles.button__icon}>
          <FaClipboardList size={20} />
        </div>
        <h2 className={styles.button__text}>Adicionar Empresa</h2>
      </button>

      {/* MODAL */}
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </>
  );
};
