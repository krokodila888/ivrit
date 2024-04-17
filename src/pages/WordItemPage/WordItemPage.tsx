import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackToTopic from "../../components/BackToTopic/BackToTopic";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import styles from './WordItemPage.module.scss';
import { removeCurrentDeck, removeCurrentWord } from '../../services/actions/currentDeck';
import { TWord, TTopic, TNumWord } from '../../utils/types';

const WordItemPage: FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardsAreVisible, setCardsAreVisible] = useState<boolean>(false);
  const { currentDeck } = useSelector((state: any) => state.currentDeckReducer);
  const { currentWord } = useSelector((state: any) => state.currentDeckReducer);

  function handleClick() {
    dispatch(removeCurrentDeck());
    dispatch(removeCurrentWord());
    navigate(`/`);
  }

  function handleBackClick() {
    //console.log(document.referrer);
    setCardsAreVisible(true);
    dispatch(removeCurrentWord());
    navigate(`/topics/${currentDeck.enTopic}`);
  }

  /*React.useEffect(()=> {
    console.log(currentWord);
  }, [])*/

  return (
    <>
      <Header />
      <main className={styles.wordItem}>
        <section className={styles.wordItem__content}>
          <TitleContainer 
            handleClick={handleClick}
          />
          <div className={styles.wordItem__formsContainer}>
            <div className={styles.wordItem__formContainer}>
              <p className={styles.wordItem__word}>
                הו {currentWord.present[0].vocalization} 
              </p>
              <p className={styles.wordItem__transcription}>
                {currentWord.present[0].transcription}
              </p>
              <p>
                (он {currentWord.present[0].translation})
              </p>
            </div>
            <div className={styles.wordItem__formContainer}>
              <p className={styles.wordItem__word}>
                הי {currentWord.present[1].vocalization} 
              </p>
              <p className={styles.wordItem__transcription}>
                {currentWord.present[1].transcription}
              </p>
              <p>
                (она {currentWord.present[1].translation})
              </p>
            </div>
            <div className={styles.wordItem__formContainer}>
              <p className={styles.wordItem__word}>
                הם {currentWord.present[2].vocalization} 
              </p>
              <p className={styles.wordItem__transcription}>
                {currentWord.present[2].transcription}
              </p>
              <p>
                (они (м) {currentWord.present[2].translation})
              </p>
            </div>
            <div className={styles.wordItem__formContainer}>
              <p className={styles.wordItem__word}>
                הן {currentWord.present[3].vocalization} 
              </p>
              <p className={styles.wordItem__transcription}>
                {currentWord.present[3].transcription}
              </p>
              <p>
                (они (ж) {currentWord.present[3].translation})
              </p>
            </div>
          </div>
          <BackToTopic handleCloseModesClick={handleBackClick} />
        </section>
      </main>
      <Footer />
    </>
  );
}  

export default WordItemPage;
