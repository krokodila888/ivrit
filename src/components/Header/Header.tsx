import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/icon.png';
import { removeCurrentDeck } from '../../services/actions/currentDeck';
import styles from './Header.module.scss';
import { useAppDispatch } from '../../services/hooks';
import { useAppSelector } from '../../services/hooks';

const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentDeck } = useAppSelector((state) => state.currentDeckReducer);

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__title}>
          (Не)рабочее пространство Женечки
        </h2>
        <img
          src={icon}
          alt="Иконка"
          className={
            ((currentDeck !== null && currentDeck !== undefined) || window.location.pathname === '/numbers') ? styles.header__iconHover : styles.header__icon
          }
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
