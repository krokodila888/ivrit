import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import around from '../../../images/around.png';
import './WordCard.css';

function WordCard(props) {

  const {item, cardsAreVisible } = props;

  const [hintIsVisible, setHintIsVisible] = useState(false);
  const [backIsVisible, setBackIsVisible] = useState(false);

  useEffect(()=> {
    console.log(cardsAreVisible)
  }, [])

  function handleClick() {
    setHintIsVisible(!hintIsVisible);
  }

  function handleIconClick() {
    setBackIsVisible(!backIsVisible);
  }

  function setText() {
    if (hintIsVisible) return `${item.transcription}`; else return 'Подсказка'
  }

  return (
    <div className="wordCard">
      {!backIsVisible && 
      <>
        {cardsAreVisible &&         
        <p className="word">
          {item.translation}
        </p>}
        {!cardsAreVisible && 
        <>
          <p className="word">
            {item.word}
          </p>
          <p className="translation">
            {item.translation}
          </p>
          <p className="translation">
            {item.transcription}
          </p>
        </>
        }
        {cardsAreVisible && 
        <>
          <p className="translation1" onClick={handleClick}>
            {setText()}
          </p>
          <img 
            src={around} 
            alt="Стрелка переворота" 
            className='wordCard__img'
            onClick={handleIconClick}
          />
        </>
        }
      </>
      }
      {backIsVisible && 
      <>
        <p className="word">
          {item.word}
        </p>
        <p className="translation">
          {item.transcription}
        </p>
        <img 
          src={around} 
          alt="Стрелка переворота" 
          className='wordCard__img'
          onClick={handleIconClick}/>
        </>
      }
    </div>
  );
}  

export default WordCard;
