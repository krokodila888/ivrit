import React from "react";
import { useSelector} from 'react-redux';
import './TitleContainer.css';
import arrow from '../../images/arrow2.png';

function TitleContainer(props) {

  const { handleClick } = props;
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  return (
    <div className="titleContainer">
      {window.location.href.substring(window.location.href.length - 7) === 'numbers' &&
      <h1 className="titleContainer__title">
        Запоминаем числа
      </h1>
      }
      {currentDeck && currentDeck !== null &&
      <h1 className="titleContainer__title">
        Слова по теме: {currentDeck.ruTopic}
      </h1>
      }
      <div className="titleContainer__arrow-container-top" onClick={handleClick}>
        <img 
          src={arrow} 
          alt="Стрелка назад" 
          className='titleContainer__arrow'
        />
        <p className="titleContainer__text">На главную</p>
      </div>
    </div>
  );
}  

export default TitleContainer;