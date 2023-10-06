import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import CardsHolder from './CardsHolder/CardsHolder.jsx';
import './DeckItemPage.css';
import WordCard from './WordCard/WordCard.jsx';
import { vocabulary } from "../../utils/constants.js";
import arrow from '../../images/arrow2.png';
import { removeCurrentDeck } from '../../services/actions/currentDeck.js';

function DeckItemPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [words, setWords] = useState([]);
  const [wordsAreVisible, setWordsAreVisible] = useState(true);
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  useEffect(()=> {
    let aaa;
    if (currentDeck !== null) {
      aaa = vocabulary.filter(item => item.ruTopic.includes(currentDeck.ruTopic));
      setWords(aaa);
    }
  }, [currentDeck])

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  function handleTraunNumbersClick() {
    dispatch(removeCurrentDeck());
    navigate(`/numbers`);
  }

  function handleCloseModesClick() {
    setWordsAreVisible(true);
    setCardsAreVisible(false);
    setRepeatMode(false);
  }

  function handleRepeatModeClick() {
    setWordsAreVisible(false);
    setRepeatMode(true);
  }

  function handleCardsModeClick() {
    setCardsAreVisible(true);
  }

  return (
    <>
      <Header />
      <main className="main__content1">
        <section className="deckItem__content">
          <div className="deckItem__title-container">
            <h1 className="deckItem__title">
              Слова по теме: {currentDeck.ruTopic}
            </h1>
            <div className="deckItem__title-container1" onClick={handleClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="deckItem__text">На главную</p>
            </div>
          </div>
          {wordsAreVisible && !cardsAreVisible && !repeatMode && currentDeck.ruTopic === 'Числа' &&
          <div className="decks__button-container">
            <button className="deckItem__button" onClick={handleTraunNumbersClick}>
              Тренировать числа
            </button>
          </div>}
          {wordsAreVisible && currentDeck !== null && words.length !== 0 && 
            <div className="deckItem__words">
              {words.map((item, i) => (
                <WordCard key={i} item={item} cardsAreVisible={cardsAreVisible}/>))
              }
            </div>}
          {!wordsAreVisible && repeatMode &&
            <CardsHolder words={words} handleCloseModesClick={handleCloseModesClick} />
          }
          {wordsAreVisible && !cardsAreVisible &&
          <div className="decks__button-container">
            <button className="deckItem__button" onClick={handleCardsModeClick}>
              Учить карточки
              </button>
            <button className="deckItem__button" onClick={handleRepeatModeClick}>
              Печатать слова
            </button>
          </div>}
          {!repeatMode && cardsAreVisible && 
            <div className="deckItem__arrow-container" onClick={handleCloseModesClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="deckItem__text">Назад к теме</p>
            </div>
          }
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default DeckItemPage;
