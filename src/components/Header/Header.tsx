import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/icon.png';
import { removeCurrentDeck } from '../../services/actions/currentDeck';
import './header.css';

const Header: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentDeck } = useSelector((state: any) => state.currentDeckReducer);

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <h2 className="header__title">
          (Не)рабочее пространство Женечки
        </h2>
        <img 
          src={icon} 
          alt="Иконка" 
          className={currentDeck !== null ? 'header__icon-hover' : 'header__icon'}
          onClick={handleClick}/>
      </div>
    </header>
  );
}  

export default Header; 