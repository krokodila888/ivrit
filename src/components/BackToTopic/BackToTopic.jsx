import React from "react";
import './BackToTopic.css';
import arrow from '../../images/arrow2.png';

function BackToTopic(props) {

  const { handleCloseModesClick } = props;

  return (
    <div className="backToTopic__arrow-container" onClick={handleCloseModesClick}>
      <img 
        src={arrow} 
        alt="Стрелка назад" 
        className='backToTopic__arrow'
      />
      <p className="backToTopic__text">
        Назад к теме
      </p>
    </div>
  )
}  

export default BackToTopic;
