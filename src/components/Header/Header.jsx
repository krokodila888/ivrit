import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/icon.png';
import { removeCurrentDeck } from '../../services/actions/currentDeck.js';
import './header.css';

function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

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