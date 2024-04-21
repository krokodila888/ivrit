import { FC, useEffect, useState, useRef, SetStateAction } from 'react';
import styles from './LettersTrainMode.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import { TWord } from '../../utils/types';
import { alefbet } from '../../utils/constants';
import { TLetter } from '../../utils/types';

type TProps = {
  words: TWord[];
  wordsToRepeat: TWord[];
  setWordsToRepeat: React.Dispatch<SetStateAction<TWord[]>>;
  currentWord: TWord | null;
  setCurrentWord: React.Dispatch<React.SetStateAction<TWord | null>>;
  stopRepeating: () => void;
};

const LettersTrainMode: FC<TProps> = (props: TProps) => {

  const { words, wordsToRepeat, setWordsToRepeat, currentWord, setCurrentWord, stopRepeating } = props;

  const [repeatMode, setRepeatMode] = useState(true);
  const [answer, setAnswer] = useState(false);
  const [guessed, setGuessed] = useState('');
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState(false);
  const [otherMeanings, setOtherMeanings] = useState<TLetter[] | null>(null);
  const [currentLetter, setCurrentLetter] = useState<TLetter | null>(null);
  const [count, setCount] = useState(0);
  const trainButtonDiv = useRef<any>(null);
  const answerWord = useRef<any>(null);
  const letterButton1 = useRef<any>(null);
  const letterButton2 = useRef<any>(null);
  const letterButton3 = useRef<any>(null);
  const letterButton4 = useRef<any>(null);  
  const letterButton5 = useRef<any>(null);
  const letterButton6 = useRef<any>(null);

  //тут выставляются неправильные значения
  useEffect(() => {
    if (currentWord ) {
      setCurrentLetter({letter: currentWord.word[count]})
    }
  }, [currentWord, count]);


  useEffect(() => {
    if (currentWord && currentLetter) {
      let newMeanings = alefbet.filter((item) => {
        if (item.letter !== currentLetter?.letter) {
        return item}
      });
      newMeanings.forEach(
        (item) => {item.number = Math.floor(Math.random() * 10) + 1
      });
      const sorted = [...newMeanings as unknown as TLetter[]].sort(function (a: any, b: any) {
        return b.number - a.number;
      });
      let newMeanings1 = sorted.slice(0, 5);
      let aa = currentLetter;
      aa.number = Math.floor(Math.random() * (10 - 1) + 1);
      newMeanings1.push(aa);
      newMeanings1.forEach(
        (item) => {item.number = Math.floor(Math.random() * 10) + 1
      });
      //еще один рандомайзер для равнмерного распределения ответов
      newMeanings1.sort(function (a: any, b: any) {
        return b.number - a.number;
      });
      setOtherMeanings(newMeanings1)
    }
  }, [currentWord, currentLetter]);

  function showHint() {
    setHintIsVisible(true);
  }

  function showAnswer() {
    setAnswer(true);
    setHintIsVisible(true);
    letterButton1.current.disabled = true;
    letterButton2.current.disabled = true;
    letterButton3.current.disabled = true;
    letterButton4.current.disabled = true;
    letterButton5.current.disabled = true;
    letterButton6.current.disabled = true;
    letterButton1.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton2.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton3.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton4.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton5.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton6.current.classList.add(styles.trainScreenChoises__disabledAnswer);
    letterButton1.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    letterButton2.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    letterButton3.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    letterButton4.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    letterButton5.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    letterButton6.current.classList.remove(styles.trainScreenChoises__answer_hovered);
    if (wordsToRepeat !== null && currentWord !== null) {
      setWordsToRepeat([...wordsToRepeat, currentWord]) 
    };
  }

  function stopRepeating1() {
    setHintIsVisible(false);
    setRepeatMode(false);
    setAnswer(false);
    setCurrentLetter(null);
    setCount(0);
    setGuessed('');
    stopRepeating();
  }

  function word() {
    if (currentWord && currentWord !== null) {
      return (
        <>
          <div className={styles.wordCard}>
            <p 
              className={styles.wordCard__word}>
              {currentWord.translation}
            </p>
            <p 
              className={styles.wordCard__text}
              onClick={showHint}>
              {!hintIsVisible ? 'Подсказка' : currentWord.transcription}
            </p>
            <p 
              className={styles.wordCard__translation}
              ref={answerWord}>
              {!answer ? (guessed === '' ? '???' : guessed) : (currentWord.word)}
            </p>
          </div>
        </>
      );
    }
  }

  function handleItemClick(item: TLetter, ref: React.MutableRefObject<any>) {
    if (currentLetter?.letter !== item?.letter) {
      /*console.log(ref);
      console.log(item);
      console.log(ref.current);
      console.log(letterButton1);
      console.log(ref.current.classList);*/
      ref.current.classList.add(styles.incorrectBtn);
    } 
    else {
      if (currentWord?.word.length !== undefined && count < (currentWord?.word.length - 1)) {
        setGuessed(guessed + item.letter);
        setCount(count + 1);
        letterButton1.current.classList.remove(styles.incorrectBtn);
        letterButton2.current.classList.remove(styles.incorrectBtn);
        letterButton3.current.classList.remove(styles.incorrectBtn);
        letterButton4.current.classList.remove(styles.incorrectBtn);
        letterButton5.current.classList.remove(styles.incorrectBtn);
        letterButton6.current.classList.remove(styles.incorrectBtn);
      }
      if (currentWord?.word.length !== undefined && count === (currentWord?.word.length - 1)){
        setHintIsVisible(true);
        setAnswer(true);
        ref.current.classList.add(styles.correctBtn);
        answerWord.current.classList.add(styles.correct);
        letterButton1.current.disabled = true;
        letterButton2.current.disabled = true;
        letterButton3.current.disabled = true;
        letterButton4.current.disabled = true;
        letterButton5.current.disabled = true;
        letterButton6.current.disabled = true;
        letterButton1.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton2.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton3.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton4.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton5.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton6.current.classList.add(styles.trainScreenChoises__disabledAnswer);
        letterButton1.current.classList.remove(styles.trainScreenChoises__answer_hovered);
        letterButton2.current.classList.remove(styles.trainScreenChoises__answer_hovered);
        letterButton3.current.classList.remove(styles.trainScreenChoises__answer_hovered);
        letterButton4.current.classList.remove(styles.trainScreenChoises__answer_hovered);
        letterButton5.current.classList.remove(styles.trainScreenChoises__answer_hovered);
        letterButton6.current.classList.remove(styles.trainScreenChoises__answer_hovered);

      }
    }
  }

    function nextWord() {
      if (currentWord) {
        letterButton1.current.disabled = false;
        letterButton2.current.disabled = false;
        letterButton3.current.disabled = false;
        letterButton4.current.disabled = false;
        letterButton5.current.disabled = false;
        letterButton6.current.disabled = false;
        letterButton1.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton2.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton3.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton4.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton5.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton6.current.classList.add(styles.trainScreenChoises__answer_hovered);
        letterButton1.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton2.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton3.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton4.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton5.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton6.current.classList.remove(styles.trainScreenChoises__disabledAnswer);
        letterButton1.current.classList.remove(styles.incorrectBtn);
        letterButton1.current.classList.remove(styles.correctBtn);
        letterButton2.current.classList.remove(styles.incorrectBtn);
        letterButton2.current.classList.remove(styles.correctBtn);
        letterButton3.current.classList.remove(styles.incorrectBtn);
        letterButton3.current.classList.remove(styles.correctBtn);
        letterButton4.current.classList.remove(styles.incorrectBtn);
        letterButton4.current.classList.remove(styles.correctBtn);
        letterButton5.current.classList.remove(styles.incorrectBtn);
        letterButton5.current.classList.remove(styles.correctBtn);
        letterButton6.current.classList.remove(styles.incorrectBtn);
        letterButton6.current.classList.remove(styles.correctBtn);
        answerWord.current.classList.remove(styles.incorrect);
        answerWord.current.classList.remove(styles.correct);
        setRepeatedWords([...repeatedWords, currentWord]);
        setHintIsVisible(false);
        setAnswer(false);
        setCurrentLetter(null);
        setGuessed('');
        setCount(0);
    
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
              className={styles.trainScreenChoises__letterButtonBlock} >
              <button
                onClick={() => {handleItemClick(otherMeanings[0], letterButton1)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton1}>
                 {otherMeanings[0].letter}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[1], letterButton2)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton2}>
                 {otherMeanings[1].letter}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[2], letterButton3)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton3}>
                 {otherMeanings[2].letter}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[3], letterButton4)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton4}>
                 {otherMeanings[3].letter}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[4], letterButton5)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton5}>
                 {otherMeanings[4].letter}   
              </button>
              <button
                onClick={() => {handleItemClick(otherMeanings[5], letterButton6)}}
                className={`${styles.trainScreenChoises__answer} ${styles.trainScreenChoises__answer_hovered}`}
                type='button'
                ref={letterButton6}>
                 {otherMeanings[5].letter}   
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

export default LettersTrainMode;
