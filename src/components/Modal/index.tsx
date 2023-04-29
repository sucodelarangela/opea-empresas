import styles from './Modal.module.sass';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from 'utils/yupSchema';
import { IClient } from 'interfaces/IClient';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import { Clients } from 'api/api';
import { useClientContext } from 'context/ClientContext';

interface Props {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ setModalOpen }: Props) => {
  const { setClients, setLoading } = useClientContext();

  useEffect(() => {
    setLoading?.(false);
  }, []);

  // Funções do react-hook-form para validação dos dados antes do envio à API
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IClient>({
    mode: 'onChange',
    resolver: yupResolver(yupSchema)
  });

  // Função para submit do formulário
  const registerClient = (data: IClient) => {
    const client = {
      name: data.name,
      cnpj: data.cnpj,
      email: data.email
    };
    Clients.postClient(client)
      .then(data => {
        setClients?.(prevClients => [...prevClients, data]);
        setModalOpen(false);
      });
  };

  // Acessibilidade: Fechando a Modal com a tecla ESC
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
      <div
        className={styles.modal}
        aria-modal='true'
        aria-labelledby='modal__header--title'
        role='alertdialog'
      >
        <div className={styles.modal__header}>
          <h2 id='modal__header--title'>Cadastrar Empresa</h2>
          <IoMdCloseCircle
            size={16}
            onClick={() => setModalOpen(false)}
          />
        </div>
        <form
          onSubmit={handleSubmit(registerClient)}
          className={styles.modal__form}
        >
          <fieldset>
            <label
              htmlFor='name'
              aria-label={errors.name ? `Nome: ${errors.name.message}` : 'Nome'}
            >Nome</label>
            <input
              className={errors.name && styles.error}
              type='text'
              id='name'
              {...register('name')}
            />
            {errors.name && <span className='error'>{errors.name.message}</span>}
          </fieldset>
          <fieldset>
            <label
              htmlFor='cnpj'
              aria-label={errors.cnpj ? `CNPJ: ${errors.cnpj.message}` : 'CNPJ'}
            >CNPJ</label>
            <input
              className={errors.cnpj && styles.error}
              type='text'
              id='cnpj'
              {...register('cnpj')}
            />
            {errors.cnpj && <span className='error'>{errors.cnpj.message}</span>}
          </fieldset>
          <fieldset>
            <label
              htmlFor='email'
              aria-label={errors.email ? `E-mail: ${errors.email.message}` : 'E-mail'}
            >E-mail</label>
            <input
              className={errors.email && styles.error}
              type='email'
              id='email'
              {...register('email')}
            />
            {errors.email && <span className='error'>{errors.email.message}</span>}
          </fieldset>
          <div className={styles.modal__footer}>
            <button
              type='button'
              className={styles.delete}
              onClick={() => setModalOpen(false)}
              tabIndex={1}
              aria-hidden='true'
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
