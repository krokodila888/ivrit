import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import around from '../../images/around1.png';
import styles from './WordCard.module.scss';
import { setCurrentWord } from '../../services/actions/currentDeck';
import { TWord } from '../../utils/types';

type TProps = {
  cardsAreVisible: boolean;
  item: TWord;
};

const WordCard: FC<TProps> = (props: TProps) => {
  const { item, cardsAreVisible } = props;
  const { currentDeck } = useSelector((state: any) => state.currentDeckReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const [backIsVisible, setBackIsVisible] = useState<boolean>(false);

  function handleClick() {
    setHintIsVisible(!hintIsVisible);
  }

  function handleIconClick() {
    setBackIsVisible(!backIsVisible);
  }

  function setText() {
    if (hintIsVisible) return `${item.transcription}`;
    else return 'Подсказка';
  }

  function setVerb() {
    if (currentDeck) {
      dispatch(setCurrentWord(item));
      navigate(`/topics/${currentDeck.enTopic}/${item.enTranslation}`);
    }
  }

  return (
    <div className={styles.wordCard}>
      {!backIsVisible && (
        <>
          {cardsAreVisible && 
          <p className={styles.word}>
            {item.translation}
          </p>}
          {!cardsAreVisible && (
            <>
              <p className={styles.word}>
                {item.vocalization}
              </p>
              <p className={styles.translation}>
                {item.translation}
              </p>
              <p className={styles.translation}>
                {item.transcription}
              </p>
            </>
          )}
          {cardsAreVisible && (
            <>
              <p 
                className={styles.translation1 && styles.translation2} 
                onClick={handleClick}>
                {setText()}
              </p>
              <img
                src={around}
                alt="Стрелка переворота"
                className={styles.wordCard__img}
                onClick={handleIconClick}
              />
            </>
          )}
        </>
      )}
      {backIsVisible && (
        <>
          <p className={styles.word}>
            {item.vocalization}
          </p>
          <p className={styles.translation1}>
            {item.transcription}
          </p>
          <img
            src={around}
            alt="Стрелка переворота"
            className={styles.wordCard__img}
            onClick={handleIconClick}
          />
        </>
      )}
      {item && item.ruTopic.includes('Глаголы') && (
        <p 
          className={styles.text}
          onClick={setVerb}>
          cмотреть формы
        </p>
      )}
    </div>
  );
};

export default WordCard;
