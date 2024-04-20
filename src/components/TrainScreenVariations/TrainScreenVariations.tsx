import { FC, useEffect, useState, useRef } from 'react';
import styles from './TrainScreenVariations.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import { TWord } from '../../utils/types';

type TProps = {
  handleCloseModesClick: () => void;
  words: TWord[];
};

const TrainScreenVariations: FC<TProps> = (props: TProps) => {

  const { words, handleCloseModesClick } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [answer, setAnswer] = useState<boolean>(false);
  const [wordOrTranslation, setWordOrTranslation] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<TWord | null>(null);
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [repeatedWords, setRepeatedWords] = useState<TWord[]>([]);
  const [wordsToRepeat, setWordsToRepeat] = useState<TWord[]>([]);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const [otherMeanings, setOtherMeanings] = useState<TWord[] | null>(null);
  const trainButtonDiv = useRef<any>(null);
  const chooseButtonDiv = useRef<any>(null);
  const chooseButton1 = useRef<any>(null);
  const chooseButton2 = useRef<any>(null);
  const chooseButton3 = useRef<any>(null);
  const chooseButton4 = useRef<any>(null);

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
  }

  function setText(item: TWord) {
    if (hintIsVisible) return `${item.transcription}`;
    else return 'Подсказка';
  }

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

  function showAnswer() {
    setAnswer(true);
    setHintIsVisible(true);
  }

  function stopRepeating() {
    setHintIsVisible(false);
    setRepeatMode(false);
    setAnswer(false);
    setMeaning({ ...repeatingForm, word: '' });
    handleCloseModesClick();
  }

  function word() {
    if (currentWord && currentWord !== null) {
      return (
        <>
          <div className={styles.wordCard}>
            <p 
              className={styles.word}>
              {wordOrTranslation ? currentWord.translation : currentWord.word}
            </p>
            <p 
              className={styles.text}
              onClick={showHint}>
              {!hintIsVisible ? 'Подсказка' : currentWord.transcription}
            </p>
            <p className={styles.translation}>
              {!answer ? '???' : (wordOrTranslation ? currentWord.word : currentWord.translation)}
            </p>
          </div>
        </>
      );
    }
  }

  function handleItemCkick(item: TWord, ref: React.MutableRefObject<any>) {
    setHintIsVisible(true);
    setAnswer(true);
    if (currentWord?.word === item?.word) {
      //console.log('ok!');
      ref.current.classList.add(styles.correct);
      /*console.log(currentWord?.word === item?.word);
      console.log(currentWord?.word);
      console.log(item?.word);*/
      trainButtonDiv.current.classList.add(styles.cardsHolder__correct);
    }
    else {
      //console.log('not!');
      ref.current.classList.add(styles.incorrect);
      trainButtonDiv.current.classList.add(styles.cardsHolder__incorrect);
      if (wordsToRepeat !== null && currentWord !== null) {
        setWordsToRepeat([...wordsToRepeat, currentWord]) 
      };
    }}

  function nextWord() {
    if (currentWord) {
      chooseButton1.current.classList.remove(styles.incorrect);
      chooseButton1.current.classList.remove(styles.correct);
      chooseButton2.current.classList.remove(styles.incorrect);
      chooseButton2.current.classList.remove(styles.correct);
      chooseButton3.current.classList.remove(styles.incorrect);
      chooseButton3.current.classList.remove(styles.correct);
      chooseButton4.current.classList.remove(styles.incorrect);
      chooseButton4.current.classList.remove(styles.correct);
      trainButtonDiv.current.classList.remove(styles.cardsHolder__incorrect);
      trainButtonDiv.current.classList.remove(styles.cardsHolder__correct);
      setRepeatedWords([...repeatedWords, currentWord]);
      setHintIsVisible(false);
      setAnswer(false);
      setMeaning({ ...repeatingForm, word: '' });

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
        className={styles.cardsHolder} 
        id="cardsHolder"
      >
        {repeatMode && otherMeanings &&
          <div className={styles.cardsHolder__form}>
            {word()}
            <div 
              className={styles.cardsHolder__chooseButtonBlock} 
              ref={chooseButtonDiv}>
              <p
                onClick={() => {handleItemCkick(otherMeanings[0], chooseButton1)}}
                className={styles.cardsHolder__answer}
                ref={chooseButton1}>
                 {wordOrTranslation ? otherMeanings[0].word : otherMeanings[0].translation}   
              </p>
              <p
                onClick={() => {handleItemCkick(otherMeanings[1], chooseButton2)}}
                className={styles.cardsHolder__answer}
                ref={chooseButton2}>
                 {wordOrTranslation ? otherMeanings[1].word : otherMeanings[1].translation}   
              </p>
              <p
                onClick={() => {handleItemCkick(otherMeanings[2], chooseButton3)}}
                className={styles.cardsHolder__answer}
                ref={chooseButton3}>
                 {wordOrTranslation ? otherMeanings[2].word : otherMeanings[2].translation}   
              </p>
              <p
                onClick={() => {handleItemCkick(otherMeanings[3], chooseButton4)}}
                className={styles.cardsHolder__answer}
                ref={chooseButton4}>
                 {wordOrTranslation ? otherMeanings[3].word : otherMeanings[3].translation}   
              </p>

            </div>
            <div 
              className={styles.cardsHolder__buttonBlock}
              ref={trainButtonDiv}>
              <TrainButton
                onClick={showAnswer}
                text="Показать ответ"
              />
              <TrainButton 
                onClick={nextWord} 
                text="Следующая"
              />
            </div>
          </div>
        }
        <BackToTopic handleCloseModesClick={stopRepeating} />
      </section>
    </>
  );
};

export default TrainScreenVariations;

/*
            <>
              <p 
                className={styles.cardsHolder__title}>
              {wordOrTranslation ? otherMeanings[0].word : otherMeanings[0].translation}
              </p>
              <p 
                className={styles.cardsHolder__title}>
              {wordOrTranslation ? otherMeanings[1].word : otherMeanings[1].translation}
              </p>
              <p 
                className={styles.cardsHolder__title}>
              {wordOrTranslation ? otherMeanings[2].word : otherMeanings[2].translation}
              </p>
              <p 
                className={styles.cardsHolder__title}>
              {wordOrTranslation ? otherMeanings[3].word : otherMeanings[3].translation}
              </p>
            </>
            */