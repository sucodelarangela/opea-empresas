import { FaClipboardList } from 'react-icons/fa';
import styles from './Button.module.sass';

export const Button = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button__icon}>
        <FaClipboardList size={20} />
      </div>
      <h2 className={styles.button__text}>Adicionar Empresa</h2>
    </button>
  );
};
