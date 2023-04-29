/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styles from './Search.module.sass';
import { useClientContext } from 'context/ClientContext';
import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setQuery } = useClientContext();

  const handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current !== null) {
      setQuery?.(inputRef.current.value);
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) setQuery?.('');
  };

  return (
    <form
      onSubmit={handleQuery}
      className={`container ${styles.form}`}
    >
      <label
        htmlFor='search'
        className='sr-only'
      >Buscar empresa...</label>
      <input
        className={styles.input}
        type='text'
        id='search'
        name='search'
        placeholder='Buscar empresa...'
        ref={inputRef}
        onChange={(e) => handleValue(e)}
      />
      <button
        type='submit'
        aria-label='Fazer busca'
      >
        <FaSearch
          size={16}
        />
      </button>
    </form>
  );
};
