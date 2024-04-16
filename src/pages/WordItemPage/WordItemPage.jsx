import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import BackToTopic from "../../components/BackToTopic/BackToTopic.jsx";
import './WordItemPage.css';
import { verbs } from "../../utils/constants.js";
import arrow from '../../images/arrow2.png';
import { removeCurrentDeck, removeCurrentWord } from '../../services/actions/currentDeck.js';

function WordItemPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [words, setWords] = useState([]);
  const [wordsAreVisible, setWordsAreVisible] = useState(true);
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const { currentWord } = useSelector(state => state.currentDeckReducer);

  function handleClick() {
    dispatch(removeCurrentDeck());
    dispatch(removeCurrentWord());
    navigate(`/`);
  }

  function handleBackClick() {
    console.log(document.referrer);
    setCardsAreVisible(true);
    dispatch(removeCurrentWord());
    navigate(`/topics/${currentDeck.enTopic}`);
  }

  return (
    <>
      <Header />
      <main className="wordItem">
        <section className="wordItem__content">
          <div className="wordItem__title-container">
            <div className="wordItem__titleTextContainer">
              <h1 className="wordItem__title">Формы глагола </h1>
              <p className="wordItem__title1">
                {currentWord.infinitive.vocalization} 
              </p> 
              <p className="wordItem__text-grey">
                {currentWord.infinitive.transcription}
              </p>
            </div>
            <div className="wordItem__title-container1" onClick={handleClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="wordItem__text">На главную</p>
            </div>
          </div>
          <div className="wordItem__forms-container">
            <div className="wordItem__form-container">
              <p className="wordItem__word">
                הו {currentWord.present[0].vocalization} 
              </p>
              <p className="wordItem__transcription">
                {currentWord.present[0].transcription}
              </p>
              <p>
                (он {currentWord.present[0].translation})
              </p>
            </div>
            <div className="wordItem__form-container">
              <p className="wordItem__word">
                הי {currentWord.present[1].vocalization} 
              </p>
              <p className="wordItem__transcription">
                {currentWord.present[1].transcription}
              </p>
              <p>
                (она {currentWord.present[1].translation})
              </p>
            </div>
            <div className="wordItem__form-container">
              <p className="wordItem__word">
                הם {currentWord.present[2].vocalization} 
              </p>
              <p className="wordItem__transcription">
                {currentWord.present[2].transcription}
              </p>
              <p>
                (они {currentWord.present[2].translation})
              </p>
            </div>
            <div className="wordItem__form-container">
              <p className="wordItem__word">
                הן {currentWord.present[3].vocalization} 
              </p>
              <p className="wordItem__transcription">
                {currentWord.present[3].transcription}
              </p>
              <p>
                (они {currentWord.present[3].translation})
              </p>
            </div>
          </div>
          <BackToTopic handleCloseModesClick={handleBackClick} />
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default WordItemPage;
