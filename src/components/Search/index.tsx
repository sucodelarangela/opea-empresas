import styles from './Search.module.sass';
import { FaSearch } from 'react-icons/fa';

export const Search = () => {
  return (
    <form className={`container ${styles.form}`}>
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
      />
      <FaSearch
        size={16}
        aria-hidden='true'
      />
    </form>
  );
};
