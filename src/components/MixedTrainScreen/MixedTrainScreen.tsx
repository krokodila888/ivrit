import { FC, useEffect, useState, useRef } from 'react';
import styles from './MixedTrainScreen.module.scss';
import TrainScreenVariations from '../TrainScreenVariations/TrainScreenVariations';
import TrainScreen from '../TrainScreen/TrainScreen';
import LettersTrainMode from '../LettersTrainMode/LettersTrainMode';
import { TWord } from '../../utils/types';

type TProps = {
  handleCloseModesClick: () => void;
  words: TWord[];
};

const MixedTrainScreen: FC<TProps> = (props: TProps) => {
  const { words, handleCloseModesClick } = props;

  const [repeatMode, setRepeatMode] = useState(true);
  const [trainScreen, setTrainScreen] = useState<number>(1);
  const [wordOrTranslation, setWordOrTranslation] = useState(false);
  const [currentWord, setCurrentWord] = useState<TWord | null>(null);
  const [wordsToRepeat, setWordsToRepeat] = useState<TWord[]>([]);

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
  }

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
    if (Math.floor(Math.random() * (3 - 1) + 1) > 1) {
      setWordOrTranslation(!wordOrTranslation);
    }
    setTrainScreen(Math.floor(Math.random() * (4 - 1) + 1));
  }, [currentWord]);

  useEffect(() => {
    if (
      words &&
      words.length !== 0 &&
      wordsToRepeat &&
      wordsToRepeat.length === words.length
    )
      startRepeating();
  }, [wordsToRepeat]);

  function stopRepeating() {
    handleCloseModesClick();
  }

  return (
    <>
      <section className={styles.trainScreenChoises} id="cardsHolder">
        {repeatMode && trainScreen === 1 && (
          <TrainScreenVariations
            words={words}
            wordsToRepeat={wordsToRepeat}
            setWordsToRepeat={setWordsToRepeat}
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            stopRepeating={stopRepeating}
            wordOrTranslation={wordOrTranslation}
          />
        )}
        {repeatMode && trainScreen === 2 && (
          <TrainScreen
            words={words}
            wordsToRepeat={wordsToRepeat}
            setWordsToRepeat={setWordsToRepeat}
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            stopRepeating={stopRepeating}
            wordOrTranslation={wordOrTranslation}
          />
        )}
        {repeatMode && trainScreen === 3 && (
          <LettersTrainMode
            words={words}
            wordsToRepeat={wordsToRepeat}
            setWordsToRepeat={setWordsToRepeat}
            currentWord={currentWord}
            setCurrentWord={setCurrentWord}
            stopRepeating={stopRepeating}
          />
        )}
      </section>
    </>
  );
};

export default MixedTrainScreen;
