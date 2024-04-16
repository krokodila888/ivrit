import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import around from '../../images/around.png';
import './WordCard.css';
import { setCurrentWord} from '../../services/actions/currentDeck.js';

function WordCard(props) {

  const {item, cardsAreVisible } = props;
  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hintIsVisible, setHintIsVisible] = useState(false);
  const [backIsVisible, setBackIsVisible] = useState(false);

  function handleClick() {
    setHintIsVisible(!hintIsVisible);
  }

  function handleIconClick() {
    setBackIsVisible(!backIsVisible);
  }

  function setText() {
    if (hintIsVisible) return `${item.transcription}`; else return 'Подсказка'
  }

  function setVerb() {
    if (currentDeck) {
      dispatch(setCurrentWord(item));
      navigate(`/topics/${currentDeck.enTopic}/${item.enTranslation}`);
    }
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
            {item.vocalization}
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
          <p className="translation1 translation2" onClick={handleClick}>
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
          {item.vocalization}
        </p>
        <p className="translation1">
          {item.transcription}
        </p>
        <img 
          src={around} 
          alt="Стрелка переворота" 
          className='wordCard__img'
          onClick={handleIconClick}/>
        </>
      }
      {item && item.ruTopic.includes('Глаголы') &&         
        <p className="text" onClick={setVerb}>
          cмотреть формы
        </p>}
    </div>
  );
}  

export default WordCard;
