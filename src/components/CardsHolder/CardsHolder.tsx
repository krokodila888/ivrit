import { FC, useEffect, useState, ChangeEvent, useRef } from 'react';
import styles from './CardsHolder.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import arrowBack from '../../images/repeat.png';
import { TWord } from '../../utils/types';

type TProps = {
  handleCloseModesClick: () => void;
  words: TWord[];
};

const CardsHolder: FC<TProps> = (props: TProps) => {

  const { words, handleCloseModesClick } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [showWord, setShowWord] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<TWord | null>(null);
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [wordsToRepeat, setWordsToRepeat] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const wordsRepeatingInput = useRef<any>(null);

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
  }

  function setText(item: TWord) {
    if (hintIsVisible) return `${item.transcription}`;
    else return 'Подсказка';
  }

  useEffect(() => {
    if (words && words.length !== 0) {
      let sorted = words;
      sorted.forEach(
        (item: TWord) => (item.number = Math.floor(Math.random() * 10) + 1)
      );
      sorted.sort(function (a: any, b: any) {
        return a.number - b.number;
      });
      setWordsToRepeat(sorted);
    }
  }, [words]);

  useEffect(() => {
    if (
      words &&
      words.length !== 0 &&
      wordsToRepeat &&
      wordsToRepeat.length === words.length
    )
      startRepeating();
  }, [wordsToRepeat]);

  function showHint() {
    setHintIsVisible(true);
  }

  function showTranslation() {
    setShowWord(true);
  }

  const onRepeatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  function stopRepeating() {
    setHintIsVisible(false);
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
    setHintIsVisible(false);
  }

  function word() {
    if (currentWord && currentWord !== null) {
      return (
        <>
          <div className={styles.cardsHolder__titleRow}>
            <p className={styles.cardsHolder__title}>
              {currentWord.translation}
            </p>
            <p 
              className={styles.cardsHolder__hint} 
              onClick={showHint}>
              {setText(currentWord)}
            </p>
          </div>
          <div className={styles.cardsHolder__answer}>
            {showWord && 
            <>
              <p className={styles.cardsHolder__title}>
                {currentWord.word}
              </p>
              {currentWord &&
                currentWord !== null &&
                currentWord.word !== 'Правда все.'}
            </>}
          </div>
        </>
      );
    }
  }

  useEffect(() => {
    if (
      wordsRepeatingInput.current &&
      currentWord &&
      currentWord.word === repeatingForm.word
    ) {
      setIsCorrect(true);
      wordsRepeatingInput.current.classList.add(styles.cardsHolder__input_active);
    }
    if (
      wordsRepeatingInput.current &&
      currentWord &&
      currentWord.word !== repeatingForm.word &&
      isCorrect
    ) {
      setIsCorrect(false);
      wordsRepeatingInput.current.classList.remove(styles.cardsHolder__input_active);
    }
  }, [repeatingForm]);

  function nextWord1() {
    if (currentWord) {
      setRepeatedWords([...repeatedWords, currentWord]);
      setShowWord(false);
      setIsCorrect(false);
      setHintIsVisible(false);
      setMeaning({ ...repeatingForm, word: '' });
      if (wordsRepeatingInput.current) {
        wordsRepeatingInput.current.classList.remove(styles.cardsHolder__input_active);
      }
      if (wordsToRepeat.length > 1) {
        setCurrentWord(wordsToRepeat[1]);
        setWordsToRepeat(wordsToRepeat.slice(1));
      } else {
        setCurrentWord({
          word: 'Правда все.',
          translation: 'Вы повторили все!',
          transcription: 'Вы можете начать с начала',
          vocalization: '',
          ruTopic: '',
          enTopic: '',
        });
      }
    }
  }

  return (
    <>
      <section 
        className={styles.cardsHolder} 
        id="cardsHolder"
      >
        {repeatMode && (
          <div className={styles.cardsHolder__form}>
            <div>
              {word()}
            </div>
            <input
              placeholder="Место для слова"
              value={repeatingForm.word}
              id="cardsHolderRepeatingInput"
              type="text"
              name="word"
              ref={wordsRepeatingInput}
              onChange={onRepeatChange}
              required
              className={styles.cardsHolder__input}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            <div className={styles.cardsHolder__advice}>
              {showWord && 
              <p>
                Если напечатать правильный вариант,
                он лучше запомнится
              </p>
              }
            </div>
            <div className={styles.cardsHolder__buttonBlock}>
              <TrainButton 
                onClick={showTranslation} 
                text="Показать слово" 
              />
              <TrainButton 
                onClick={nextWord1} 
                text="Следующая" 
              />
            </div>
          </div>
        )}
        {currentWord &&
          currentWord !== null &&
          currentWord.word === 'Правда все.' && (
            <div 
              className={styles.cardsHolder__arrowContainer}
              onClick={repeatAgain}>
              <img
                src={arrowBack}
                alt="Стрелка назад"
                className={styles.cardsHolder__repeatImg}
              />
              <p className={styles.deckItem__text}>
                Повторять снова
              </p>
            </div>
          )}
        <BackToTopic handleCloseModesClick={stopRepeating} />
      </section>
    </>
  );
};

export default CardsHolder;
