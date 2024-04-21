import React, { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import DeckItemPage from '../../pages/DeckItemPage/DeckItemPage';
import WordItemPage from '../../pages/WordItemPage/WordItemPage';
import NumbersTrainPage from '../../pages/NumbersTrainPage/NumbersTrainPage';
import './App.scss';
import { useNavigate } from 'react-router-dom';
import { topics, verbs } from '../../utils/constants';
import {
  setCurrentDeck,
  setCurrentWord,
} from '../../services/actions/currentDeck';
import { useAppDispatch } from '../../services/hooks';
import { useAppSelector } from '../../services/hooks';

const App: FC = () => {
  const { currentDeck, currentWord } = useAppSelector(
    (state) => state.currentDeckReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let filteredTopics;
    let filteredVerbs;
    const adress = window.location.pathname.slice(8);
    const firstPos = adress.indexOf('/');
    if (firstPos !== -1) {
      filteredTopics = topics.filter(
        (item) => item.enTopic === window.location.pathname.substr(8, firstPos)
      );
      filteredVerbs = verbs.filter(
        (item) =>
          item.enTranslation === window.location.pathname.slice(9 + firstPos)
      );
    } else {
      filteredTopics = topics.filter(
        (item) => item.enTopic === window.location.pathname.slice(8)
      );
    }
    if (filteredTopics !== undefined && filteredTopics) {
      dispatch(setCurrentDeck(filteredTopics[0]));
    }
    if (filteredVerbs !== undefined && filteredVerbs) {
      dispatch(setCurrentWord(filteredVerbs[0]));
    }
    if (
      filteredTopics &&
      filteredVerbs &&
      filteredTopics.length !== 0 &&
      filteredVerbs.length === 0
    ) {
      navigate(`/topics/${filteredTopics[0].enTopic}`);
    }
    if ((!filteredTopics && !filteredVerbs) || filteredTopics.length === 0) {
      navigate(`/`);
    }
  }, []);

  return (
    <>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/numbers" element={<NumbersTrainPage />}></Route>
          {currentDeck !== null && (
            <Route path="/topics/:deckItem" element={<DeckItemPage />}></Route>
          )}
          {currentWord !== null && (
            <Route
              path="/topics/:deckItem/:wordItem"
              element={<WordItemPage />}
            ></Route>
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
