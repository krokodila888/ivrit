import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardsHolder from '../../components/CardsHolder/CardsHolder';
import PageNotFound from '../PageNotFound/PageNotFound';
import TitleContainer from "../../components/TitleContainer/TitleContainer"; 
import WordCard from '../../components/WordCard/WordCard';
import SearchingForm from "../../components/SearchingForm/SearchingForm";
import BackToTopic from "../../components/BackToTopic/BackToTopic";
import TrainButton from "../../components/ui/TrainButton/TrainButton";
import styles from './DeckItemPage.module.scss';
import { vocabulary } from "../../utils/constants";
import { removeCurrentDeck } from '../../services/actions/currentDeck';
import { TWord, TTopic } from '../../utils/types';

const DeckItemPage: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [words, setWords] = useState<TWord[]>([]);
  const [filteredWords, setFilteredWords] = useState<TWord[]>([]);
  const [wordsAreVisible, setWordsAreVisible] = useState(true);
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const [search, setSearch] = useState('');
  const { currentDeck } = useSelector((state: any) => state.currentDeckReducer);

  useEffect(() => {
    if (search !== '')
  {setFilteredWords(words.filter((item: TWord) => 
    {if (!item.ruTopic.includes('Глаголы')) return (
        (item.word.toLowerCase().includes(search.toLowerCase()) ) 
        || (item.vocalization.toLowerCase().includes(search.toLowerCase()) )
        || (item.translation.toLowerCase().includes(search.toLowerCase()) )
        || (item.transcription.toLowerCase().includes(search.toLowerCase()) )
      );
    if (item.ruTopic.includes('Глаголы')) return ((
        item.word.toLowerCase().includes(search.toLowerCase()) ) 
      || (item.vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.infinitive && item.infinitive.translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.infinitive && item.infinitive.word.toLowerCase().includes(search.toLowerCase()) )
      )
      || (item.infinitive && item.infinitive.vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.infinitive && item.infinitive.transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[0].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[1].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[2].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[3].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[0].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[1].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[2].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[3].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[0].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[1].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[2].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[3].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[0].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[1].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[2].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present && item.present[3].translation.toLowerCase().includes(search.toLowerCase()) )
    }
    ))}
    else {setFilteredWords(words)}
  }, [words, search])

  useEffect(()=> {
    setSearch('');
  }, [])

  useEffect(()=> {
    let aaa;
    if (currentDeck && currentDeck !== null) {
      aaa = vocabulary.filter(item => item.ruTopic.includes(currentDeck.ruTopic));
      setWords(aaa);
    };
    if (currentDeck && currentDeck !== null && currentDeck.ruTopic === 'Все') {
      setWords(vocabulary);
    }
  }, [currentDeck])

  useEffect(()=> {
    setFilteredWords(words);
  }, [words])

  function handleClick() {
    dispatch(removeCurrentDeck());
    navigate(`/`);
  }

  function handleTrainNumbersClick() {
    dispatch(removeCurrentDeck());
    navigate(`/numbers`);
  }

  function handleCloseModesClick() {
    setWordsAreVisible(true);
    setCardsAreVisible(false);
    setRepeatMode(false);
  }

  function handleRepeatModeClick() {
    setWordsAreVisible(false);
    setRepeatMode(true);
  }

  function handleCardsModeClick() {
    setCardsAreVisible(true);
  }

  return (
    <> {(!currentDeck || currentDeck === null || currentDeck === undefined) ? <PageNotFound /> : <>
      <Header />
      <main className={styles.deckItem}>
        <section className={styles.deckItem__section}>
          <TitleContainer 
            handleClick={handleClick}
          />
          {wordsAreVisible && !cardsAreVisible &&
          <div className={styles.deckItem__buttonContainer}>
            <TrainButton
              onClick={handleCardsModeClick}
              text="Учить карточки"
            />
            <TrainButton
              onClick={handleRepeatModeClick}
              text="Печатать слова"
            />
            {wordsAreVisible && !cardsAreVisible && !repeatMode && currentDeck.ruTopic === 'Числа' &&
            <TrainButton
              onClick={handleTrainNumbersClick}
              text="Тренировать числа"
            />
            }
          </div>
          }
          {wordsAreVisible && !cardsAreVisible && !repeatMode &&
          <SearchingForm setSearch={setSearch} />
          }
          {wordsAreVisible && currentDeck !== null && words.length !== 0 && filteredWords.length !== 0 &&
            <div className={styles.deckItem__words}>
              {filteredWords.map((item, i) => (
                <WordCard 
                  key={i} 
                  item={item} 
                  cardsAreVisible={cardsAreVisible}/>))
              }
            </div>
          }
          {!wordsAreVisible && repeatMode &&
            <CardsHolder 
              words={words} 
              handleCloseModesClick={handleCloseModesClick} />
          }
          {!repeatMode && cardsAreVisible && 
            <BackToTopic handleCloseModesClick={handleCloseModesClick} />
          }
        </section>
      </main>
      <Footer />
      </>
        }
    </>
  );
}  

export default DeckItemPage;
