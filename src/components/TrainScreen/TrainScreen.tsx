import { FC, useEffect, useState, ChangeEvent, useRef, SetStateAction } from 'react';
import styles from './TrainScreen.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import yes from '../../images/yes.png';
import no from '../../images/no.png';
import { TWord } from '../../utils/types';

type TProps = {
  words: TWord[];
  wordsToRepeat: TWord[];
  setWordsToRepeat: React.Dispatch<SetStateAction<TWord[]>>;
  currentWord: TWord | null;
  setCurrentWord: React.Dispatch<React.SetStateAction<TWord | null>>;
  wordOrTranslation: boolean;
  stopRepeating: () => void;
};

const TrainScreen: FC<TProps> = (props: TProps) => {

  const { words, wordsToRepeat, setWordsToRepeat, currentWord, setCurrentWord, stopRepeating, wordOrTranslation } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
  const [answer, setAnswer] = useState<boolean>(false);
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const [otherMeaning, setOtherMeaning] = useState<TWord | null>(null);
  const trainButtonDiv = useRef<any>(null);
  const trueButton = useRef<any>(null);
  const falseButton = useRef<any>(null);

  function setText(item: TWord) {
    if (hintIsVisible) return `${item.transcription}`;
    else return 'Подсказка';
  }

  useEffect(() => {
    if (currentWord && words && words.length !== 0) {
      let newMeanings = words.filter((item) => {
        if (item.word !== currentWord.word) {
        return item}
      });
      newMeanings.forEach(
        (item) => {item.number = Math.floor(Math.random() * 10) + 1
      });
      const sorted = [...newMeanings as unknown as TWord[]].sort(function (a: any, b: any) {
        return a.number - b.number;
      });
      let newMeanings1 = sorted.slice(0, 1);
      newMeanings1.push(currentWord);
      newMeanings1.sort(function (a: any, b: any) {
        return a.number - b.number;
      });
      setOtherMeaning(newMeanings1[0])
    }
  }, [currentWord]);

  function showHint() {
    setHintIsVisible(true);
  }

  function stopRepeating1() {
    setHintIsVisible(false);
    setRepeatMode(false);
    stopRepeating();
  }

  function word() {
    if (currentWord && currentWord !== null) {
      return (
        <>
          <div 
            className={styles.trainScreen__titleRow}>
            <p className={styles.trainScreen__title}>
              {wordOrTranslation ? currentWord.translation : currentWord.word}
            </p>
            {otherMeaning && !isIncorrect &&
            <>
              <p className={styles.trainScreen__title}>
                -
              </p>
              <p className={styles.trainScreen__title}>
              {wordOrTranslation ? otherMeaning.word : otherMeaning.translation}{!answer && '?'}
              </p>
            </>
            }
            {otherMeaning && isIncorrect &&
            <>
              <p className={styles.trainScreen__title}>
              {wordOrTranslation ? currentWord.word : currentWord.translation}
              </p>
            </>
            }

          </div>
          <div className={styles.trainScreen__answer}>
            <p 
              className={styles.trainScreen__hint} 
              onClick={showHint}>
              {setText(currentWord)}
            </p>
          </div>
        </>
      );
    }
  }

  function isOk() {
    setAnswer(true);
    setHintIsVisible(true);
    trueButton.current.disabled = true;
    falseButton.current.disabled = true;
    trueButton.current.classList.remove(styles.trainScreen__decisionBtn_hovered);
    falseButton.current.classList.remove(styles.trainScreen__decisionBtn_hovered);
    if (currentWord?.word === otherMeaning?.word) {
      trainButtonDiv.current.classList.add(styles.trainScreen__correct)  
    }
    else {
      trainButtonDiv.current.classList.add(styles.trainScreen__incorrect);
      setIsIncorrect(true);
      if (wordsToRepeat !== null && currentWord !== null) {
        setWordsToRepeat([...wordsToRepeat, currentWord]) 
      };
    }}

  function isNotOk() {
    setAnswer(true);
    setHintIsVisible(true);
    trueButton.current.disabled = true;
    falseButton.current.disabled = true;
    trueButton.current.classList.remove(styles.trainScreen__decisionBtn_hovered);
    falseButton.current.classList.remove(styles.trainScreen__decisionBtn_hovered);
    if (currentWord?.word !== otherMeaning?.word) {
      setIsIncorrect(true);
      trainButtonDiv.current.classList.add(styles.trainScreen__correct);
    if (wordsToRepeat !== null && currentWord !== null) {
        setWordsToRepeat([...wordsToRepeat, currentWord]) 
    };
    }
    else {
      trainButtonDiv.current.classList.add(styles.trainScreen__incorrect) 
    }
  }

  function nextWord() {
    if (currentWord) {
      trainButtonDiv.current.classList.remove(styles.trainScreen__incorrect);
      trainButtonDiv.current.classList.remove(styles.trainScreen__correct);
      setRepeatedWords([...repeatedWords, currentWord]);
      setHintIsVisible(false);
      setIsIncorrect(false);
      setAnswer(false);
      trueButton.current.disabled = false;
      falseButton.current.disabled = false;
      trueButton.current.classList.add(styles.trainScreen__decisionBtn_hovered);
      falseButton.current.classList.add(styles.trainScreen__decisionBtn_hovered);

      if (wordsToRepeat.length > 1) {
        setCurrentWord(wordsToRepeat[1]);
        setWordsToRepeat(wordsToRepeat.slice(1));
      } else {
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
      }
    }
  }

  return (
    <>
      <section 
        className={styles.trainScreen} 
        id="cardsHolder"
      >
        {repeatMode && (
          <div className={styles.trainScreen__form}>
            <div>
              {word()}
            </div>
            <div className={styles.trainScreen__chooseButtonBlock}>
              <button
                onClick={isOk}
                ref={trueButton}
                className={styles.trainScreen__decisionBtn}
              >
                <img
                  src={yes}
                  alt="Зеленая галочка"
                  className={styles.trainScreen__decisionImg}
                />
              </button>
              <button
                onClick={isNotOk}
                ref={falseButton}
                className={styles.trainScreen__decisionBtn}
              >
                <img
                  src={no}
                  alt="Красный крестик"
                  className={styles.trainScreen__decisionImg}
                />
              </button>
            </div>
            <div 
              className={styles.trainScreen__buttonBlock}
              ref={trainButtonDiv}>
              <TrainButton 
                onClick={nextWord} 
                text="Следующая"
              />
            </div>
          </div>
        )}
        <BackToTopic handleCloseModesClick={stopRepeating1} />
      </section>
    </>
  );
};

export default TrainScreen;
