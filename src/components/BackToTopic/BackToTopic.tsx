import React, { FC } from 'react';
import styles from './BackToTopic.module.scss';
import arrow from '../../images/arrow2.png';

type TProps = {
  handleCloseModesClick: () => void;
};

const BackToTopic: FC<TProps> = (props: TProps) => {
  const { handleCloseModesClick } = props;

  return (
    <div
      className={styles.backToTopic}
      onClick={handleCloseModesClick}
    >
      <img 
        src={arrow} 
        alt="Стрелка назад" 
        className={styles.backToTopic__arrow} />
      <p className={styles.backToTopic__text}>
        Назад к теме
      </p>
    </div>
  );
};

export default BackToTopic;
