import { FC, useEffect, useState, ChangeEvent, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import BackToTopic from "../../components/BackToTopic/BackToTopic";
import TrainButton from "../../components/ui/TrainButton/TrainButton";
import styles from './NumbersTrainPage.module.scss';
import { vocabulary } from "../../utils/constants";
import { removeCurrentDeck, setCurrentDeck } from '../../services/actions/currentDeck';
import { TNumWord } from '../../utils/types';
import { useAppDispatch } from '../../services/hooks';

const NumbersTrainPage: FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [currentNum, setCurrentNum] = useState<TNumWord | null>(null);
  const [showNum, setShowNum] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [hintIsVisible, setHintIsVisible] = useState<boolean>(false);
  const words = vocabulary.filter(item => item.ruTopic.includes('Числа'));
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const repeatingNumInput = useRef<any>();

  function makeAnswer() {
    let num1 = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10);
    let meaning1 = '';
    let transcription1 = '';
    if (num1 < 21 && words !== null) {
      meaning1 = words.filter(item => item.num === num1)[0].word;
      transcription1 = words.filter(item => item.num === num1)[0].transcription;
    }
    else if (num1 > 20 && num1 < 101 && num1 % 10 === 0) {
      meaning1 = words.filter(item => item.num === num1)[0].word;
      transcription1 = words.filter(item => item.num === num1)[0].transcription;
    }
    else if (num1 > 20 && num1 < 110 && num1 !== 100) {
      let tens1;
      let tens2: number | undefined;
      let tens;
      if (num1 > 20 && num1 < 100) {
        tens1 = String(num1)[0];
        tens2 = Number(tens1) * 10;
      };
      if (num1 > 99) {
        tens2 = 100;
      };

      tens = words.filter(item => item.num === tens2)[0].word;
      let tensTranscription;
      tensTranscription = words.filter(item => item.num === tens2)[0].transcription;
      let lastNum1 = num1 % 10;
      let lastNum;
      if (lastNum1 === 1) {
        lastNum = ' ואחת';
        transcription1 = `${tensTranscription} вэ ахАт`;
      };
      if (lastNum1 === 2) {
        lastNum = ' ושתיים';
        transcription1 = `${tensTranscription} у штАйм`;
      };
      if (lastNum1 === 3) {
        lastNum = ' ןשלוש';
        transcription1 = `${tensTranscription} вэ шалОш`;
      };
      if (lastNum1 === 4) {
        lastNum = ' וארבע';
        transcription1 = `${tensTranscription} вэ арбА`;
      };
      if (lastNum1 === 5) {
        lastNum = ' וחמש';
        transcription1 = `${tensTranscription} вэ хамЭш`;
      };
      if (lastNum1 === 6) {
        lastNum = ' ושש';
        transcription1 = `${tensTranscription} ва шеш`;
      };
      if (lastNum1 === 7) {
        lastNum = ' ושבע';
        transcription1 = `${tensTranscription} ва шЭва`;
      };
      if (lastNum1 === 8) {
        lastNum = ' ושמונה';
        transcription1 = `${tensTranscription} у шмОнэ`;
      };
      if (lastNum1 === 9) {
        lastNum = ' ותשע';
        transcription1 = `${tensTranscription} ва тЭша`;
      };
      meaning1 = `${tens}${lastNum}`;
    }
    setCurrentNum({num: num1, meaning: meaning1, transcription: transcription1});
  }

  useEffect(()=> {
    makeAnswer()
  }, [])

  function showHint() {
    setHintIsVisible(true);
  }
  function setText() {
    if (hintIsVisible && currentNum && currentNum.transcription) return `${currentNum.transcription}`; else return 'Подсказка'
  }

  function word() {
    if (currentNum && currentNum !== null) {
    return (
    <>
      <div className={styles.cardsHolder__titleRow}>
        <p className={styles.cardsHolder__title}>
          {currentNum.num}
        </p>
        <p 
          className={styles.cardsHolder__hint} 
          onClick={showHint}>
          {setText()}
        </p>
      </div>
      <div className={styles.cardsHolder__answer}>
      {showNum && 
      <>
        <p className={styles.cardsHolder__title}>
          {currentNum.meaning}
        </p>
      </>}
      </div>
    </>)}
  }
  
  function showTranslation() {
    setShowNum(true);
  };

  const onRepeatChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (repeatingNumInput.current) {
      setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
    }
  };

  useEffect(()=> {
    if (repeatingNumInput.current && currentNum && (currentNum.meaning === repeatingForm.word)) 
    {setIsCorrect(true);
      repeatingNumInput.current.classList.add(styles.cardsHolder__input_active);};
    if (repeatingNumInput.current && currentNum && (currentNum.meaning !== repeatingForm.word) && isCorrect) {
      setIsCorrect(false);
      repeatingNumInput.current.classList.remove(styles.cardsHolder__input_active);};
  }, [repeatingForm])

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  function nextWord1() {
    setShowNum(false);
    setIsCorrect(false);
    setHintIsVisible(false);
    setMeaning({ ...repeatingForm, word: '' });
    if (repeatingNumInput.current) {
      repeatingNumInput.current.classList.remove(styles.cardsHolder__input_active);
    };
    makeAnswer();
  }

  function handleCloseModesClick() {
    setShowNum(false);
    setIsCorrect(false);
    setHintIsVisible(false);
    setMeaning({ ...repeatingForm, word: '' });
    if (repeatingNumInput.current) {
      repeatingNumInput.current.classList.remove(styles.cardsHolder__input_active);
    };
    dispatch(setCurrentDeck({
      ruTopic: 'Числа',
      enTopic: 'Numbers',
    }));
    navigate('/topics/Numbers');
  }

  return (
    <>
      <Header />
      <main className={styles.numbersTraining}>
        <section className={styles.numbersTraining__section}>
          <TitleContainer 
            handleClick={handleClick}
          />
          <div className={styles.cardsHolder__form}>
            <div>
              {word()}
            </div>
            <input 
              placeholder="Место для слова" 
              value={repeatingForm.word} 
              id='cardsHolderRepeatingNumInput'
              ref={repeatingNumInput}
              type="text"
              name="word" 
              onChange={onRepeatChange}
              required
              className={styles.cardsHolder__input}
              autoComplete="off"
              autoCorrect="off" 
              autoCapitalize="off" 
              spellCheck="false" 
            />
            <div className={styles.cardsHolder__advice}>
            {showNum && currentNum && currentNum !== null &&
              <p>
                Если напечатать правильный вариант,
                он лучше запомнится
              </p>
            }
            </div>
            <div className={styles.cardsHolder__buttonBlock}>
              <TrainButton
                onClick={showTranslation}
                text="Показать ответ"
                disabled={false}
              />
              <TrainButton
                onClick={nextWord1}
                text="Следующее число"
                disabled={false}
              />
            </div>
          </div>
          <BackToTopic handleCloseModesClick={handleCloseModesClick} />
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default NumbersTrainPage;
