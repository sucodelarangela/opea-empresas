import styles from './Header.module.sass';
import OpeaLogo from 'assets/opea_logo.svg';
import { FaUserCircle } from 'react-icons/fa';

export const Header = () => {
  return (
    <header>
      <div className={`container ${styles.header_content}`}>
        <img
          src={OpeaLogo}
          alt='Homepage Opea Empresas'
        />
        <div className={styles.user}>
          <p>Nome do Usuário</p>
          <FaUserCircle size={24} />
        </div>
      </div>
    </header>
  );
};
