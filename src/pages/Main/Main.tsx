import React, { FC } from "react";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BigTopicButton from "../../components/ui/BigTopicButton/BigTopicButton";
import TopicButton from "../../components/ui/TopicButton/TopicButton";
import { useNavigate } from 'react-router-dom';
import photo from '../../images/photo1.jpg';
import { topicsForRender, partsOfSpeach } from '../../utils/constants';
import { setCurrentDeck } from '../../services/actions/currentDeck';
import styles from './Main.module.scss';
import { useAppDispatch } from '../../services/hooks';
import { TTopic } from "../../utils/types";

const Main: FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function setDeck(item: TTopic) {
    dispatch(setCurrentDeck(item));
    navigate(`/topics/${item.enTopic}`);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.aboutMe} id="AboutMe">
          <div className={styles.aboutMe__textBlock}>
            <div className={styles.aboutMe__column}>
              <div className={styles.aboutMe__column1}>
                <p className={styles.aboutMe__statusText}>
                  !שלום
                  <br/>
                  Я Женя, и я учу иврит.
                </p>
                <p className={styles.aboutMe__text}>
                  А еще я учу JavaScript и хочу, чтобы одно работало на другое (и бонусом - чтобы однажды меня взяли на работу в айти). Будет здорово, если эта штука еще кому-нибудь пригодится.
                </p>
                <p className={styles.aboutMe__text}>
                  Пока слов немного и по конкретному учебнику для начинающих. С хорошей вероятностью будет пополняться)
                </p>
              </div>
            </div>        
            <div className={styles.aboutMe__column}>
              <img 
                src={photo} 
                alt="Фото Женечки, ужасно симпатичное" 
                className={styles.aboutMe__photo} />
            </div>      
          </div>
        </section>
        <section 
          className={styles.decks__mainContent} 
          id="Main-decks">
          <div className={styles.decks__contentWrap}>
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
        <section className={styles.decks} id="Decks">
          <h2 className={styles.aboutMe__titleText}>
            Части речи
          </h2>
          <div className={styles.decks__contentWrap}>
            {partsOfSpeach.map((item, i) => (
              <TopicButton 
                key={i}
                onClick={() => {setDeck(item)}}
                text={item.ruTopic} 
              />
            ))}
          </div>
          <h2 className={styles.aboutMe__titleText}>
            Темы
          </h2>
          <div className={styles.decks__contentWrap}>
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
