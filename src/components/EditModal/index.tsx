/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from '../Modal/Modal.module.sass';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Clients } from 'api/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from 'utils/yupSchema';
import { IClient } from 'interfaces/IClient';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import { useClientContext } from 'context/ClientContext';

interface Props extends IClient {
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditModal = ({ id, name, cnpj, email, setEditModalOpen }: Props) => {
  const { setLoading, setClients } = useClientContext();

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
    resolver: yupResolver(yupSchema),
    defaultValues: {
      name,
      cnpj,
      email
    }
  });

  // Função para submit do formulário
  const updateClient = (data: IClient) => {
    const client = {
      name: data.name,
      cnpj: data.cnpj,
      email: data.email
    };
    Clients.updateClient(client, id!)
      .then(() => {
        Clients.getClients()
          .then(data => {
            setClients?.(data);
            setEditModalOpen(false);
          });
      });
  };

  // Deletar empresa
  const deleteClient = (id: string) => {
    if (window.confirm('Deseja realmente excluir esta empresa?')) {
      Clients.deleteClient(id);
      setClients?.(prevClients => prevClients.filter(client => {
        return client.id !== id;
      }));
      setEditModalOpen(false);
    }
  };

  // Acessibilidade: Fechando a Modal com a tecla ESC
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        setEditModalOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setEditModalOpen(false)}
      ></div>
      <div
        className={styles.modal}
        aria-modal='true'
        aria-labelledby='modal__header--title'
        role='dialog'
      >
        <div className={styles.modal__header}>
          <h2 id='modal__header--title'>Atualizar Empresa</h2>
          <IoMdCloseCircle
            size={16}
            onClick={() => setEditModalOpen(false)}
          />
        </div>
        <form
          onSubmit={handleSubmit(updateClient)}
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
              onClick={() => deleteClient(id!)}
              aria-label='Excluir cadastro'
            >
              <FaTrashAlt size={14} />
            </button>
            <div>
              <button
                type='button'
                className={styles.cancel}
                onClick={() => setEditModalOpen(false)}
              >Cancelar</button>
              <button
                type='submit'
                className={styles.register}
              >Atualizar</button>
            </div>
          </div>
        </form >
      </div >
    </>
  );
};
