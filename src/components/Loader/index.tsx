import styles from './Loader.module.sass';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img
        src='/favico.svg'
        alt=''
        aria-hidden='true'
        className={styles.loader__img}
      />
    </div>
  );
};
