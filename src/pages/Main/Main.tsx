import React, { FC, useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BigTopicButton from "../../ui/BigTopicButton/BigTopicButton";
import TopicButton from "../../ui/TopicButton/TopicButton";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import photo from '../../images/photo1.jpg';
import { topics, topicsForRender, partsOfSpeach } from '../../utils/constants';
import { setCurrentDeck } from '../../services/actions/currentDeck';
import './Main.css';

const Main: FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDeck } = useSelector((state: any) => state.currentDeckReducer);

  function setDeck(item: any) {
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
            <BigTopicButton 
              onClick={() => {setDeck({
                ruTopic: 'Все',
                enTopic: 'All',
                })}}
              bigText="Все слова"
              smallText="с поиском"
            />
            <BigTopicButton 
              onClick={() => {setDeck({
                ruTopic: 'Глаголы',
                enTopic: 'Verbs',
                })}}
              bigText="Глаголы"
              smallText="и их формы"
            />
            <BigTopicButton 
              onClick={() => {setDeck({
                ruTopic: 'Числа',
                enTopic: 'Numbers',
                })}}
              bigText="Числа"
              smallText="и тренажер к ним"
            />
          </div>
        </section>
        <section className="decks__content" id="Decks">
          <h2 className="aboutMe__title-text">
            Части речи
          </h2>
          <div className="decks__content-wrap">
            {partsOfSpeach.map((item, i) => (
              <TopicButton 
                key={i}
                onClick={() => {setDeck(item)}}
                text={item.ruTopic} 
              />
            ))}
          </div>
          <h2 className="aboutMe__title-text">
            Темы
          </h2>
          <div className="decks__content-wrap">
            {topicsForRender.map((item, i) => (
              <TopicButton 
                key={i}
                onClick={() => {setDeck(item)}}
                text={item.ruTopic} 
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default Main;
