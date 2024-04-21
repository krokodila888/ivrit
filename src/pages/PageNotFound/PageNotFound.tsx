import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PageNotFound.module.scss';
import Header from '../../components/Header/Header';
import arrow from '../../images/arrow2.png';

const PageNotFound: FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <>
      <Header />
      <section className={styles.pageNotFound}>
        <h3 className={styles.pageNotFound__title}>404</h3>
        <p className={styles.pageNotFound__text}>Тут пока ничего нет.</p>
        <div className={styles.pageNotFound__arrowContainer} onClick={goBack}>
          <img
            src={arrow}
            alt="Стрелка назад"
            className={styles.pageNotFound__arrow}
          />
          <p className={styles.pageNotFound__text}>Вернитесь на главную.</p>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
