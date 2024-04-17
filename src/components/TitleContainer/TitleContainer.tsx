import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './TitleContainer.module.scss';
import arrow from '../../images/arrow2.png';

type TProps = {
  handleClick: () => void;
};

const TitleContainer: FC<TProps> = (props: TProps) => {
  const { handleClick } = props;
  const { currentDeck, currentWord } = useSelector(
    (state: any) => state.currentDeckReducer
  );

  return (
    <div className={styles.titleContainer}>
      {window.location.href.substring(window.location.href.length - 7) ===
        'numbers' && (
        <h1 className={styles.titleContainer__title}>
          Запоминаем числа
        </h1>
      )}
      {currentDeck && currentDeck !== null && currentWord === null && (
        <h1 className={styles.titleContainer__title}>
          Слова по теме: {currentDeck.ruTopic}
        </h1>
      )}
      {currentWord && currentWord !== null && (
        <div className={styles.titleContainer__verbBlock}>
          <h1 className={styles.titleContainer__title}>
            Формы глагола
          </h1>
          <p className={styles.titleContainer__title}>
            {currentWord.infinitive.vocalization}{' '}
            <span className={styles.titleContainer__transcription}>
              {currentWord.infinitive.transcription}
            </span>
          </p>
        </div>
      )}
      <div
        className={styles.titleContainer__arrowContainerTop}
        onClick={handleClick}
      >
        <img
          src={arrow}
          alt="Стрелка назад"
          className={styles.titleContainer__arrow}
        />
        <p className={styles.titleContainer__text}>
          На главную
        </p>
      </div>
    </div>
  );
};

export default TitleContainer;
