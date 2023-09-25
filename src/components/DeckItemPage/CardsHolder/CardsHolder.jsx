import React, { useEffect, useState } from "react";
import './CardsHolder.css';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../../images/arrow2.png';
import arrow1 from '../../../images/repeat.svg';

function CardsHolder(props) {

  const { words, handleCloseModesClick } = props;

  const dispatch = useDispatch();
  const [repeatMode, setRepeatMode] = useState(true);
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWord, setCurrentWord] = useState(null);
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [wordsToRepeat, setWordsToRepeat] = useState([]);
  const repeatingInput = document.getElementById('cardsHolderRepeatingInput');

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
  }

  useEffect(()=> {
    if (words && words.length !== 0) 
    setWordsToRepeat(words);
  }, [words])

  useEffect(()=> {
    if (words && words.length !== 0 && wordsToRepeat && wordsToRepeat.length === words.length) 
    startRepeating();
    console.log('start');
  }, [wordsToRepeat])

  useEffect(()=> {
    console.log(currentWord)
  }, [currentWord])

  useEffect(()=> {
    console.log(wordsToRepeat)
  }, [wordsToRepeat])

  function showTranslation() {
    setShowWord(true);
  };

  const onRepeatChange = e => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  function stopRepeating() {
    setRepeatMode(false);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    handleCloseModesClick();
  }

  function repeatAgain() {
    setShowWord(false);
    setIsCorrect(false);
    setWordsToRepeat(words);
  }

  function word() {
    if (currentWord && currentWord !== null) {
    return (
    <>
      <p className="cardsHolder__title">
        {currentWord.translation}
      </p>
      {showWord && 
      <>
        <p className="cardsHolder__title">
          {currentWord.word}
        </p>
        {currentWord && currentWord !== null && currentWord.word !== 'Правда все.' &&
          <p>
            Рекомендуется напечатать правильный вариант все равно: так он лучше запомнится
          </p>
        }
      </>}
    </>)}
  }

  useEffect(()=> {
    if (repeatingInput && (currentWord.word === repeatingForm.word)) 
    {setIsCorrect(true);
    repeatingInput.classList.add('cardsHolder__input_active');};
    if (repeatingInput && (currentWord.word !== repeatingForm.word) && isCorrect) {
      setIsCorrect(false);
      repeatingInput.classList.remove('cardsHolder__input_active');};
  }, [repeatingForm])

  function nextWord1() {
    setRepeatedWords([...repeatedWords, currentWord]);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    repeatingInput.classList.remove('cardsHolder__input_active');
    if (wordsToRepeat.length > 1) {setCurrentWord(wordsToRepeat[1]); 
    setWordsToRepeat(wordsToRepeat.slice(1));}
    else {setCurrentWord({word: 'Правда все.', translation: 'Вы повторили все!'})}
  }

  return (
    <>
    <section className="cardsHolder__content" id="cardsHolder">
      {repeatMode && 
      <div className='cardsHolder__form'>
        <div>
          {word()}
        </div>
        <input 
          placeholder="Место для слова" 
          value={repeatingForm.word} 
          id='cardsHolderRepeatingInput'
          type="text"
          name="word" 
          onChange={onRepeatChange}
          required
          className='cardsHolder__input'
          autoComplete="off"
          autocorrect="off" 
          autocapitalize="off" 
          spellcheck="false" />
        <div className='cardsHolder__button-block'>
          <button 
            className='cardsHolder__button'
            onClick={showTranslation}>
              Показать слово
          </button>
          <button 
            className='cardsHolder__button'
            onClick={nextWord1}>
              Следующая
          </button>
        </div>
      </div>}
      {currentWord && currentWord !== null && currentWord.word === 'Правда все.' &&
      <div className="cardsHolder__arrow-container" onClick={repeatAgain}>
        <img 
          src={arrow1} 
          alt="Стрелка назад" 
          className='cardsHolder__arrow1'
        />
        <p className="deckItem__text">Повторять снова</p>
      </div>}
      {
      <div className="cardsHolder__arrow-container" onClick={stopRepeating}>
        <img 
          src={arrow} 
          alt="Стрелка назад" 
          className='deckItem__arrow'
        />
        <p className="deckItem__text">Назад к теме</p>
      </div>}
    </section>
    </>
  );
}  

export default CardsHolder; 
