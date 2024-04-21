import { FC, useEffect, useState, useRef, SetStateAction } from 'react';
import styles from './TrainScreenVariations.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
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

const TrainScreenVariations: FC<TProps> = (props: TProps) => {

  const { words, wordsToRepeat, setWordsToRepeat, currentWord, setCurrentWord, stopRepeating, wordOrTranslation } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [answer, setAnswer] = useState<boolean>(false);
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const [otherMeanings, setOtherMeanings] = useState<TWord[] | null>(null);
  const trainButtonDiv = useRef<any>(null);
  const answerWord = useRef<any>(null);
  const chooseButton1 = useRef<any>(null);
  const chooseButton2 = useRef<any>(null);
  const chooseButton3 = useRef<any>(null);
  const chooseButton4 = useRef<any>(null);

  //тут выставляются неправильные значения
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
      let newMeanings1 = sorted.slice(0, 3);
      newMeanings1.push(currentWord);
      newMeanings1.sort(function (a: any, b: any) {
        return a.number - b.number;
      });
      setOtherMeanings(newMeanings1)
    }
  }, [currentWord]);

  function showHint() {
    setHintIsVisible(true);
  }

  function showAnswer() {
    setAnswer(true);
    setHintIsVisible(true);
  }

  function stopRepeating1() {
    setHintIsVisible(false);
    setRepeatMode(false);
    setAnswer(false);
    stopRepeating();
  }

  function word() {
    if (currentWord && currentWord !== null) {
      return (
        <>
          <div className={styles.wordCard}>
            <p 
              className={styles.wordCard__word}>
              {wordOrTranslation ? currentWord.translation : currentWord.word}
            </p>
            <p 
              className={styles.wordCard__text}
              onClick={showHint}>
              {!hintIsVisible ? 'Подсказка' : currentWord.transcription}
            </p>
            <p 
              className={styles.wordCard__translation}
              ref={answerWord}>
              {!answer ? '???' : (wordOrTranslation ? currentWord.word : currentWord.translation)}
            </p>
          </div>
        </>
      );
    }
  }

  function handleItemClick(item: TWord, ref: React.MutableRefObject<any>) {
    setHintIsVisible(true);
    setAnswer(true);
    chooseButton1.current.disabled = true;
    chooseButton2.current.disabled = true;
    chooseButton3.current.disabled = true;
    chooseButton4.current.disabled = true;
    chooseButton1.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    chooseButton2.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    chooseButton3.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    chooseButton4.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    chooseButton1.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    chooseButton2.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    chooseButton3.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    chooseButton4.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    if (currentWord?.word === item?.word) {
      ref.current.classList.add(styles.correctBtn);
      answerWord.current.classList.add(styles.correct);
    }
    else {
      //console.log('not!');
      ref.current.classList.add(styles.incorrectBtn);
      answerWord.current.classList.add(styles.incorrect);
      if (wordsToRepeat !== null && currentWord !== null) {
        setWordsToRepeat([...wordsToRepeat, currentWord]) 
      };
    }}

    function nextWord() {
        if (currentWord) {
          chooseButton1.current.disabled = false;
          chooseButton2.current.disabled = false;
          chooseButton3.current.disabled = false;
          chooseButton4.current.disabled = false;
          chooseButton1.current.classList.add(styles.trainScreenChoises__answer_hovered);
          chooseButton2.current.classList.add(styles.trainScreenChoises__answer_hovered);
          chooseButton3.current.classList.add(styles.trainScreenChoises__answer_hovered);
          chooseButton4.current.classList.add(styles.trainScreenChoises__answer_hovered);
          chooseButton1.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
          chooseButton2.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
          chooseButton3.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
          chooseButton4.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
          chooseButton1.current.classList.remove(styles.incorrectBtn);
          chooseButton1.current.classList.remove(styles.correctBtn);
          chooseButton2.current.classList.remove(styles.incorrectBtn);
          chooseButton2.current.classList.remove(styles.correctBtn);
          chooseButton3.current.classList.remove(styles.incorrectBtn);
          chooseButton3.current.classList.remove(styles.correctBtn);
          chooseButton4.current.classList.remove(styles.incorrectBtn);
          chooseButton4.current.classList.remove(styles.correctBtn);
          answerWord.current.classList.remove(styles.incorrect);
          answerWord.current.classList.remove(styles.correct);
          setRepeatedWords([...repeatedWords, currentWord]);
          setHintIsVisible(false);
          setAnswer(false);
    
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
        className={styles.trainScreenChoises} 
        id="cardsHolder"
      >
        {repeatMode && otherMeanings &&
          <div className={styles.trainScreenChoises__form}>
            {word()}
            <div 
              className={styles.trainScreenChoises__chooseButtonBlock} >
              <button
                onClick={() => {handleItemClick(otherMeanings[0], chooseButton1)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={chooseButton1}>
                 {wordOrTranslation ? otherMeanings[0].word : otherMeanings[0].translation}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[1], chooseButton2)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={chooseButton2}>
                 {wordOrTranslation ? otherMeanings[1].word : otherMeanings[1].translation}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[2], chooseButton3)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={chooseButton3}>
                 {wordOrTranslation ? otherMeanings[2].word : otherMeanings[2].translation}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[3], chooseButton4)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={chooseButton4}>
                 {wordOrTranslation ? otherMeanings[3].word : otherMeanings[3].translation}   
              </button>

            </div>
            <div 
              className={styles.trainScreenChoises__buttonBlock}
              ref={trainButtonDiv}>
              <TrainButton
                onClick={showAnswer}
                text="Показать ответ"
                disabled={answer}
              />
              <TrainButton 
                onClick={nextWord} 
                text="Следующая"
                disabled={false}
              />
            </div>
          </div>
        }
        <BackToTopic handleCloseModesClick={stopRepeating1} />
      </section>
    </>
  );
};

export default TrainScreenVariations;
