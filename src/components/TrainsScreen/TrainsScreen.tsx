import { FC, useEffect, useState, ChangeEvent, useRef } from 'react';
import styles from './TrainsScreen.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import arrowBack from '../../images/repeat.png';
import yes from '../../images/yes.png';
import no from '../../images/no.png';
import { TWord } from '../../utils/types';

type TProps = {
  handleCloseModesClick: () => void;
  words: TWord[];
};

const TrainsScreen: FC<TProps> = (props: TProps) => {

  const { words, handleCloseModesClick } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [showWord, setShowWord] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
  const [yesOrNoMode, setYesOrNoMode] = useState<boolean>(false);
  const [wordOrTranslation, setWordOrTranslation] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<TWord | null>(null);
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [wordsToRepeat, setWordsToRepeat] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const [otherMeaning, setOtherMeaning] = useState<TWord | null>(null);
  const trainButtonDiv = useRef<any>(null);

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
  }

  function setText(item: TWord) {
    if (hintIsVisible) return `${item.transcription}`;
    else return 'Подсказка';
  }

  useEffect(() => {
    if (currentWord && words && words.length !== 0) {
      let newMeanings = words;
      newMeanings.filter((item) => {
        return item !== currentWord
      })
      .forEach(
        (item) => {item.number = Math.floor(Math.random() * 10) + 1
      });
      console.log(newMeanings);
      newMeanings.sort(function (a: any, b: any) {
        return a.number - b.number;
      })
      let newMeanings1 = newMeanings.slice(0, 1);
      newMeanings1.push(currentWord);
      console.log(newMeanings);
      newMeanings1.sort(function (a: any, b: any) {
        return a.number - b.number;
      })
      console.log(newMeanings1);
      setOtherMeaning(newMeanings1[0])
    }
  }, [currentWord]);

  //слова рандомно перемешиваются
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

  //с каждым новым словом рандомайзер выбирает тип проверки
  useEffect(() => {
    if (Math.floor(Math.random() * (3 - 1) + 1) > 1) 
      setWordOrTranslation(!wordOrTranslation)
  }, [currentWord])

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
          <div 
            className={styles.cardsHolder__titleRow}>
            <p className={styles.cardsHolder__title}>
              {wordOrTranslation ? currentWord.translation : currentWord.word}
            </p>
            {otherMeaning && !isIncorrect &&
            <>
              <p className={styles.cardsHolder__title}>
              {wordOrTranslation ? otherMeaning.word : otherMeaning.translation}
              </p>
              {currentWord &&
                currentWord !== null &&
                currentWord.word !== 'Правда все.'}
            </>
            }
            {otherMeaning && isIncorrect &&
            <>
              <p className={styles.cardsHolder__title}>
              {wordOrTranslation ? currentWord.word : currentWord.translation}
              </p>
              {currentWord &&
                currentWord !== null &&
                currentWord.word !== 'Правда все.'}
            </>
            }

          </div>
          <div className={styles.cardsHolder__answer}>
            <p 
              className={styles.cardsHolder__hint} 
              onClick={showHint}>
              {setText(currentWord)}
            </p>
          </div>
        </>
      );
    }
  }

  function isOk() {
    console.log('ok');
    setHintIsVisible(true);
    if (currentWord?.word === otherMeaning?.word) {
        console.log('ok!');
        console.log(currentWord?.word === otherMeaning?.word);
        console.log(currentWord?.word);
        console.log(otherMeaning?.word);
        trainButtonDiv.current.classList.add(styles.cardsHolder__correct)  
    }
    else {
        console.log('not!');
        trainButtonDiv.current.classList.add(styles.cardsHolder__incorrect);
        setIsIncorrect(true); 
    }}

  function isNotOk() {
    console.log('not ok');
    setHintIsVisible(true);
    if (currentWord?.word !== otherMeaning?.word) {
        console.log('no');
        console.log(currentWord?.word !== otherMeaning?.word);
        console.log(currentWord?.word);
        console.log(otherMeaning?.word);
        setIsIncorrect(true);
        trainButtonDiv.current.classList.add(styles.cardsHolder__correct)  
    }
    else {
        trainButtonDiv.current.classList.add(styles.cardsHolder__incorrect) 
        console.log('ok');}
  }

  function nextWord1() {
    if (currentWord) {
      trainButtonDiv.current.classList.remove(styles.cardsHolder__incorrect);
      trainButtonDiv.current.classList.remove(styles.cardsHolder__correct);
      setRepeatedWords([...repeatedWords, currentWord]);
      setShowWord(false);
      setIsCorrect(false);
      setHintIsVisible(false);
      setIsIncorrect(false);
      setMeaning({ ...repeatingForm, word: '' });

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
            <div className={styles.cardsHolder__chooseButtonBlock}>
              <button
                onClick={isOk}
                className={styles.cardsHolder__decisionBtn}
              >
                <img
                  src={yes}
                  alt="Зеленая галочка"
                  className={styles.cardsHolder__decisionImg}
                />
              </button>
              <button
                onClick={isNotOk}
                className={styles.cardsHolder__decisionBtn}
              >
                <img
                  src={no}
                  alt="Красный крестик"
                  className={styles.cardsHolder__decisionImg}
                />
              </button>
            </div>
            <div 
              className={styles.cardsHolder__buttonBlock}
              ref={trainButtonDiv}>
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

export default TrainsScreen;
