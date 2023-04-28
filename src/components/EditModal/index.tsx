import styles from '../Modal/Modal.module.sass';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Clients } from 'api/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { yupSchema } from 'utils/yupSchema';
import { IClient } from 'interfaces/IClient';
import { IoMdCloseCircle } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';

interface Props extends IClient {
  setEditModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const EditModal = ({ id, name, cnpj, email, setEditModalOpen }: Props) => {
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    Clients.updateClient(client, id!);
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
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <h2>Atualizar Empresa</h2>
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
            <label htmlFor='name'>Nome</label>
            <input
              className={errors.name && styles.error}
              type='text'
              id='name'
              {...register('name')}
            />
            {errors.name && <span className='error'>{errors.name.message}</span>}
          </fieldset>
          <fieldset>
            <label htmlFor='cnpj'>CNPJ</label>
            <input
              className={errors.cnpj && styles.error}
              type='text'
              id='cnpj'
              {...register('cnpj')}
            />
            {errors.cnpj && <span className='error'>{errors.cnpj.message}</span>}
          </fieldset>
          <fieldset>
            <label htmlFor='email'>E-mail</label>
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
