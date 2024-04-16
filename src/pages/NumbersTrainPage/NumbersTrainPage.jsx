import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import TitleContainer from "../../components/TitleContainer/TitleContainer.jsx";
import BackToTopic from "../../components/BackToTopic/BackToTopic.jsx"; 
import './NumbersTrainPage.css';
import { vocabulary } from "../../utils/constants.js";
import arrow from '../../images/arrow2.png';
import { removeCurrentDeck, setCurrentDeck } from '../../services/actions/currentDeck.js';


function NumbersTrainPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentNum, setCurrentNum] = useState(null);
  const [showNum, setShowNum] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hintIsVisible, setHintIsVisible] = useState(false);
  const words = vocabulary.filter(item => item.ruTopic.includes('Числа'));
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const repeatingInput = document.getElementById('cardsHolderRepeatingNumInput');
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  function makeAnswer() {
    let num1 = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10);
    let meaning1;
    let transcription1;
    if (num1 < 21 && words !== null) {
      meaning1 = words.filter(item => item.num === num1)[0].word;
      transcription1 = words.filter(item => item.num === num1)[0].transcription;
    }
    else if (num1 > 20 && num1 < 101 && num1 % 10 === 0) {
      meaning1 = words.filter(item => item.num === num1)[0].word;
      transcription1 = words.filter(item => item.num === num1)[0].transcription;
    }
    else if (num1 > 20 && num1 < 110 && num1 !== 100) {
      let tens1;
      let tens2;
      let tens;
      if (num1 > 20 && num1 < 100) {
        tens1 = String(num1)[0];
        tens2 = Number(tens1) * 10;
      };
      if (num1 > 99) {
        tens2 = 100;
      };

      tens = words.filter(item => item.num === tens2)[0].word;
      let tensTranscription;
      tensTranscription = words.filter(item => item.num === tens2)[0].transcription;
      let lastNum1 = num1 % 10;
      let lastNum;
      if (lastNum1 === 1) {
        lastNum = ' ואחת';
        transcription1 = `${tensTranscription} вэ ахАт`;
      };
      if (lastNum1 === 2) {
        lastNum = ' ושתיים';
        transcription1 = `${tensTranscription} у штАйм`;
      };
      if (lastNum1 === 3) {
        lastNum = ' ןשלוש';
        transcription1 = `${tensTranscription} вэ шалОш`;
      };
      if (lastNum1 === 4) {
        lastNum = ' וארבע';
        transcription1 = `${tensTranscription} вэ арбА`;
      };
      if (lastNum1 === 5) {
        lastNum = ' וחמש';
        transcription1 = `${tensTranscription} вэ хамЭш`;
      };
      if (lastNum1 === 6) {
        lastNum = ' ושש';
        transcription1 = `${tensTranscription} ва шеш`;
      };
      if (lastNum1 === 7) {
        lastNum = ' ושבע';
        transcription1 = `${tensTranscription} ва шЭва`;
      };
      if (lastNum1 === 8) {
        lastNum = ' ושמונה';
        transcription1 = `${tensTranscription} у шмОнэ`;
      };
      if (lastNum1 === 9) {
        lastNum = ' ותשע';
        transcription1 = `${tensTranscription} ва тЭша`;
      };
      meaning1 = `${tens}${lastNum}`;
    }
    setCurrentNum({num: num1, meaning: meaning1, transcription: transcription1});
  }

  useEffect(()=> {
    makeAnswer()
  }, [])

  function showHint() {
    setHintIsVisible(true);
  }
  function setText() {
    if (hintIsVisible) return `${currentNum.transcription}`; else return 'Подсказка'
  }

  function word() {
    if (currentNum && currentNum !== null) {
    return (
    <>
      <div className="cardsHolder__title-raw">
        <p className="cardsHolder__title">
          {currentNum.num}
        </p>
        <p className="cardsHolder__hint" onClick={showHint}>
          {setText()}
        </p>
      </div>
      {showNum && 
      <>
        <p className="cardsHolder__title">
          {currentNum.meaning}
        </p>
        {currentNum && currentNum !== null &&
          <p>
            Рекомендуется напечатать правильный вариант все равно: так он лучше запомнится
          </p>
        }
      </>}
    </>)}
  }
  
  function showTranslation() {
    setShowNum(true);
  };

  const onRepeatChange = e => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  useEffect(()=> {
    if (repeatingInput && (currentNum.meaning === repeatingForm.word)) 
    {setIsCorrect(true);
    repeatingInput.classList.add('cardsHolder__input_active');};
    if (repeatingInput && (currentNum.meaning !== repeatingForm.word) && isCorrect) {
      setIsCorrect(false);
      repeatingInput.classList.remove('cardsHolder__input_active');};
  }, [repeatingForm])

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  function nextWord1() {
    setShowNum(false);
    setIsCorrect(false);
    setHintIsVisible(false);
    setMeaning({ ...repeatingForm, word: '' });
    repeatingInput.classList.remove('cardsHolder__input_active');
    makeAnswer();
  }

  function handleCloseModesClick() {
    setShowNum(false);
    setIsCorrect(false);
    setHintIsVisible(false);
    setMeaning({ ...repeatingForm, word: '' });
    repeatingInput.classList.remove('cardsHolder__input_active');
    dispatch(setCurrentDeck({
      ruTopic: 'Числа',
      enTopic: 'Numbers',
    }));
    navigate('/topics/Numbers');
  }

  useEffect(()=> {
    console.log('deck in NumTPage' + currentDeck);
    console.log(window.location.href);
    console.log(window.location.href.substring(window.location.href.length - 7))
  }, [])

  return (
    <>
      <Header />
      <main className="numbersTraining__content">
        <div className="numbersTraining__section">
          <TitleContainer 
            handleClick={handleClick}
          />
          <div className='cardsHolder__form'>
            <div>
              {word()}
            </div>
            <input 
              placeholder="Место для слова" 
              value={repeatingForm.word} 
              id='cardsHolderRepeatingNumInput'
              type="text"
              name="word" 
              onChange={onRepeatChange}
              required
              className='cardsHolder__input'
              autoComplete="off"
              autoCorrect="off" 
              autoCapitalize="off" 
              spellCheck="false" />
            <div className='cardsHolder__button-block'>
              <button 
                className='cardsHolder__button'
                onClick={showTranslation}>
                  Показать ответ
              </button>
              <button 
                className='cardsHolder__button'
                onClick={nextWord1}>
                  Следующее число
              </button>
            </div>
          </div>
          <BackToTopic handleCloseModesClick={handleCloseModesClick} />
        </div>
      </main>
      <Footer />
    </>
  );
}  

export default NumbersTrainPage;
