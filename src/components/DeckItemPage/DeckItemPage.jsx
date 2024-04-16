import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import CardsHolder from './CardsHolder/CardsHolder.jsx';
import './DeckItemPage.css';
import WordCard from './WordCard/WordCard.jsx';
import { vocabulary } from "../../utils/constants.js";
import arrow from '../../images/arrow2.png';
import magnifier from '../../images/magn.png';
import { removeCurrentDeck } from '../../services/actions/currentDeck.js';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import TitleContainer from "../TitleContainer/TitleContainer.jsx"; 

function DeckItemPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);
  const [wordsAreVisible, setWordsAreVisible] = useState(true);
  const [cardsAreVisible, setCardsAreVisible] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const [search, setSearch] = useState('');
  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  useEffect(() => {
    if (search !== '')
  {setFilteredWords(words.filter((item) => 
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
      || (item.infinitive.translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.infinitive.word.toLowerCase().includes(search.toLowerCase()) )
      )
      || (item.infinitive.vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.infinitive.transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[0].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[1].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[2].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[3].vocalization.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[0].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[1].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[2].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[3].word.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[0].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[1].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[2].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[3].transcription.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[0].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[1].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[2].translation.toLowerCase().includes(search.toLowerCase()) )
      || (item.present[3].translation.toLowerCase().includes(search.toLowerCase()) )
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

  function handleTraunNumbersClick() {
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
      <main className="deckItem__content">
        <section className="deckItem__section">
          <TitleContainer 
            handleClick={handleClick}
          />
          {wordsAreVisible && !cardsAreVisible &&
          <div className="decks__button-container">
            <button className="deckItem__train-button" onClick={handleCardsModeClick}>
              Учить карточки
              </button>
            <button className="deckItem__train-button" onClick={handleRepeatModeClick}>
              Печатать слова
            </button>
            {wordsAreVisible && !cardsAreVisible && !repeatMode && currentDeck.ruTopic === 'Числа' &&
            <button className="deckItem__train-button" onClick={handleTraunNumbersClick}>
              Тренировать числа
            </button>
            }
          </div>
          }
          {wordsAreVisible && !cardsAreVisible && !repeatMode &&
            <form className="searchForm__form">
              <div className="searchForm__input-container">
                <input 
                  className="searchForm__input" 
                  type="name" 
                  name="search" 
                  id="search" 
                  placeholder="Введите слово" 
                  required 
                  onChange={e => setSearch(e.target.value)}/>
                  <img className="searchForm__img" src={magnifier} alt="Лупа"></img>
                </div>
            </form>
          }
          {wordsAreVisible && currentDeck !== null && words.length !== 0 && filteredWords !== 0 &&
            <div className="deckItem__words">
              {filteredWords.map((item, i) => (
                <WordCard key={i} item={item} cardsAreVisible={cardsAreVisible}/>))
              }
            </div>
          }
          {!wordsAreVisible && repeatMode &&
            <CardsHolder words={words} handleCloseModesClick={handleCloseModesClick} />
          }
          {!repeatMode && cardsAreVisible && 
            <div className="deckItem__arrow-container" onClick={handleCloseModesClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="deckItem__text">Назад к теме</p>
            </div>
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


/*
    <> {(!currentDeck || currentDeck === null || currentDeck === undefined) ? <PageNotFound /> : <>
      <Header />
      <main className="deckItem__content">
        <section className="deckItem__section">
          <div className="deckItem__title-container">
            {currentDeck && currentDeck !== null &&
            <>
              <h1 className="deckItem__title">
              Слова по теме: {currentDeck.ruTopic}
            </h1>
            <div className="deckItem__arrow-container-top" onClick={handleClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="deckItem__text">На главную</p>
            </div>
            </>
            }
          </div>
          {wordsAreVisible && !cardsAreVisible &&
          <div className="decks__button-container">
            <button className="deckItem__train-button" onClick={handleCardsModeClick}>
              Учить карточки
              </button>
            <button className="deckItem__train-button" onClick={handleRepeatModeClick}>
              Печатать слова
            </button>
            {wordsAreVisible && !cardsAreVisible && !repeatMode && currentDeck.ruTopic === 'Числа' &&
            <button className="deckItem__train-button" onClick={handleTraunNumbersClick}>
              Тренировать числа
            </button>
            }
          </div>
          }
          {wordsAreVisible && !cardsAreVisible && !repeatMode &&
            <form className="searchForm__form">
              <div className="searchForm__input-container">
                <input 
                  className="searchForm__input" 
                  type="name" 
                  name="search" 
                  id="search" 
                  placeholder="Введите слово" 
                  required 
                  onChange={e => setSearch(e.target.value)}/>
                  <img className="searchForm__img" src={magnifier} alt="Лупа"></img>
                </div>
            </form>
          }
          {wordsAreVisible && currentDeck !== null && words.length !== 0 && filteredWords !== 0 &&
            <div className="deckItem__words">
              {filteredWords.map((item, i) => (
                <WordCard key={i} item={item} cardsAreVisible={cardsAreVisible}/>))
              }
            </div>
          }
          {!wordsAreVisible && repeatMode &&
            <CardsHolder words={words} handleCloseModesClick={handleCloseModesClick} />
          }
          {!repeatMode && cardsAreVisible && 
            <div className="deckItem__arrow-container" onClick={handleCloseModesClick}>
              <img 
                src={arrow} 
                alt="Стрелка назад" 
                className='deckItem__arrow'
              />
              <p className="deckItem__text">Назад к теме</p>
            </div>
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

*/