import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';
import photo from '../../../images/photo1.jpg';
import { topics } from '../../../utils/constants';
import { setCurrentDeck } from '../../../services/actions/currentDeck.js';

function AboutMe() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function setDeck(item) {
    console.log(item);
    dispatch(setCurrentDeck(item));
    navigate(`/topics/${item.enTopic}`);
  };

  return (
    <>
    <section className="aboutMe__content" id="AboutMe">
      <div className='aboutMe__text-block'>
        <div className='aboutMe__column'>
          <div className='aboutMe__column1'>
            <p className="aboutMe__status-text">
              Привет! Я Женя, и я учу иврит.
            </p>
            <p className="aboutMe__text">
              А еще я учу JavaScript, и хочу, чтобы одно работало на другое (а еще - чтобы однажды меня взяли на работу в айти). Будет здорово, если эта штука еще кому-нибудь пригодится.
            </p>
            <p className="aboutMe__text">
              Пока слов немного и по конкретному учебнику. С хорошей вероятностью будет пополняться)
            </p>
            <p className="aboutMe__text">
              <a className="aboutMe__link" href="https://github.com/krokodila888" target="_blank">
                Мой GitHub  
              </a>
              &nbsp;(на всякий случай)&nbsp;
              <a className="aboutMe__link" href="tg://resolve?domain=e_kurakina888">
                и Телеграм 
              </a>
              &nbsp;(пишите об ошибках)
            </p>
          </div>
        </div>        
        <div className='aboutMe__column'>
          <img src={photo} alt="Фото Женечки, ужасно симпатичное" className="aboutMe__photo" />
        </div>      
      </div>
    </section>
    <section className="decks__content" id="Decks">
      <div className="decks__content-wrap">
      {topics.map((item, i) => (
        <div key={i} className="decks__item" onClick={() => {setDeck(item)}}>
          <p className="decks__item-text">
            {item.ruTopic}
          </p>
        </div>))
      }
      </div>
    </section>
    </>
  );
}  

export default AboutMe; 
