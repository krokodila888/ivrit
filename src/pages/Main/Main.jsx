import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import photo from '../../images/photo1.jpg';
import { topics, topicsForRender, partsOfSpeach } from '../../utils/constants.js';
import { setCurrentDeck } from '../../services/actions/currentDeck.js';
import './Main.css';

function Main() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function setDeck(item) {
    dispatch(setCurrentDeck(item));
    navigate(`/topics/${item.enTopic}`);
  };

  return (
    <>
      <Header />
      <main className="main__content">
        <section className="aboutMe__content" id="AboutMe">
          <div className='aboutMe__text-block'>
            <div className='aboutMe__column'>
              <div className='aboutMe__column1'>
                <p className="aboutMe__status-text">
                  !שלום
                  <br/>
                  Я Женя, и я учу иврит.
                </p>
                <p className="aboutMe__text">
                  А еще я учу JavaScript и хочу, чтобы одно работало на другое (и бонусом - чтобы однажды меня взяли на работу в айти). Будет здорово, если эта штука еще кому-нибудь пригодится.
                </p>
                <p className="aboutMe__text">
                  Пока слов немного и по конкретному учебнику для начинающих. С хорошей вероятностью будет пополняться)
                </p>
              </div>
            </div>        
            <div className='aboutMe__column'>
              <img src={photo} alt="Фото Женечки, ужасно симпатичное" className="aboutMe__photo" />
            </div>      
          </div>
        </section>
        <section className="decks__main-content" id="Main-decks">
          <div className="decks__content-wrap">
            <div 
              className="decks__item" 
              onClick={() => {setDeck({
              ruTopic: 'Все',
              enTopic: 'All',
              })}}
            >
              <h2 className="decks__main-item-text">
                Все слова
              </h2>
              <p className="decks__grey-item-text">
                с поиском
              </p>
            </div>
            <div 
              className="decks__middle-item" 
              onClick={() => {setDeck({
              ruTopic: 'Глаголы',
              enTopic: 'Verbs',
              })}}
            >
              <h2 className="decks__main-item-text">
                Глаголы
              </h2>
              <p className="decks__grey-item-text">
                и их формы
              </p>
            </div>
            <div 
              className="decks__item" 
              onClick={() => {setDeck({
              ruTopic: 'Числа',
              enTopic: 'Numbers',
              })}}
            >
              <h2 className="decks__main-item-text">
                Числа
              </h2>
              <p className="decks__grey-item-text">
                и тренажер к ним
              </p>
            </div>
          </div>
        </section>
        <section className="decks__content" id="Decks">
          <h2 className="aboutMe__title-text">
            Части речи
          </h2>
          <div className="decks__content-wrap">
            {partsOfSpeach.map((item, i) => (
            <div 
              key={i} 
              className="decks__item" 
              onClick={() => {setDeck(item)}}>
              <p className="decks__item-text">
                {item.ruTopic}
              </p>
            </div>))
            }
          </div>
          <h2 className="aboutMe__title-text">
            Темы
          </h2>
          <div className="decks__content-wrap">
            {topicsForRender.map((item, i) => (
            <div 
              key={i} 
              className="decks__item" 
              onClick={() => {setDeck(item)}}>
              <p className="decks__item-text">
                {item.ruTopic}
              </p>
            </div>))
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default Main;
