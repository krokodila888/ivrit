import React, { FC } from 'react';
import styles from './footer.module.scss';
import telegram from '../../images/tlg.png';
import github from '../../images/github.png';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__wrap}>
        <li className={styles.footer__link}>
          <a
            href="https://github.com/krokodila888"
            className={styles.footer__linkText}
            target="_blank"
          >
            <img 
              className={styles.footer__socialIcon} 
              src={github} 
            />
            Мой Гитхаб
          </a>
        </li>
        <li className={styles.footer__link}>
          <a
            href="https://t.me/e_kurakina888"
            className={styles.footer__linkText}
            target="_blank"
          >
            <img 
              className={styles.footer__socialIcon} 
              src={telegram} 
            />
            (пишите об ошибках)
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
