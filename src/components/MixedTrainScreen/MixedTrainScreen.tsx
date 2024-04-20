import { FC, useEffect, useState, useRef } from 'react';
import styles from './MixedTrainScreen.module.scss';
import BackToTopic from '../BackToTopic/BackToTopic';
import TrainButton from '../ui/TrainButton/TrainButton';
import TrainScreenVariations from '../TrainScreenVariations/TrainScreenVariations';
import TrainScreen from '../TrainScreen/TrainScreen';
import { TWord } from '../../utils/types';

type TProps = {
  handleCloseModesClick: () => void;
  words: TWord[];
};

const MixedTrainScreen: FC<TProps> = (props: TProps) => {

  const { words, handleCloseModesClick } = props;

  const [repeatMode, setRepeatMode] = useState<boolean>(true);
  const [trainScreen, setTrainScreen] = useState<boolean>(false);
  const [wordOrTranslation, setWordOrTranslation] = useState<boolean>(false);
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
    console.log('shange!');
    let aa = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(aa);
    console.log(aa > 1)
    if (Math.floor(Math.random() * (3 - 1) + 1) > 1) 
      setWordOrTranslation(!wordOrTranslation);
    if (Math.floor(Math.random() * (3 - 1) + 1) > 1) {
      setTrainScreen(!trainScreen);
    }
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


  function stopRepeating() {
    handleCloseModesClick();
  }

  return (
    <>
      <section 
        className={styles.trainScreenChoises} 
        id="cardsHolder"
      >
        {repeatMode && trainScreen && 
        <TrainScreen
          words={words}
          wordsToRepeat={wordsToRepeat}
          setWordsToRepeat={setWordsToRepeat}
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          stopRepeating={stopRepeating}
          wordOrTranslation={wordOrTranslation} />
        }
        {repeatMode && !trainScreen && 
          <TrainScreenVariations
          words={words}
          wordsToRepeat={wordsToRepeat}
          setWordsToRepeat={setWordsToRepeat}
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          stopRepeating={stopRepeating}
          wordOrTranslation={wordOrTranslation} />
        }
      </section>
    </>
  );
};

export default MixedTrainScreen;
