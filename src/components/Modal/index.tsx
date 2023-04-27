import styles from './Modal.module.sass';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setModalOpen }: Props) => {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        setModalOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setModalOpen(false)}
      ></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2>Cadastrar Empresa</h2>
          <IoMdCloseCircle
            size={16}
            onClick={() => setModalOpen(false)}
          />
        </div>
        <form className={styles.modal__form}>
          <fieldset>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='cnpj'>CNPJ</label>
            <input
              type='text'
              id='cnpj'
            />
          </fieldset>
          <fieldset>
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              id='email'
            />
          </fieldset>
          <div className={styles.modal__footer}>
            <button
              type='button'
              className={styles.delete}
            >
              <FaTrashAlt size={14} />
            </button>
            <div>
              <button
                type='button'
                className={styles.cancel}
                onClick={() => setModalOpen(false)}
              >Cancelar</button>
              <button
                type='submit'
                className={styles.register}
              >Cadastrar</button>
            </div>
          </div>
        </form >
      </div >
    </>
  );
};
