import React, {FC} from "react";
import './BackToTopic.css';
import arrow from '../../images/arrow2.png';

type TProps = {
  handleCloseModesClick: () => void;
};

const BackToTopic: FC<TProps> = (props: TProps) => {

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
