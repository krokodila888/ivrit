import React, { FC, useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import DeckItemPage from '../../pages/DeckItemPage/DeckItemPage';
import WordItemPage from '../../pages/WordItemPage/WordItemPage';
import NumbersTrainPage from '../../pages/NumbersTrainPage/NumbersTrainPage';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { topics, verbs } from "../../utils/constants";
import { setCurrentDeck, setCurrentWord  } from '../../services/actions/currentDeck';

const App: FC = () => {

  const { currentDeck, currentWord } = useSelector((state: any) => state.currentDeckReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    let aa;
    let aaa;
    const adress = window.location.pathname.slice(8);
    const firstPos = adress.indexOf('/');
    if (firstPos !== -1) {
      aa = topics.filter(item => item.enTopic === window.location.pathname.substr(8, firstPos));
      aaa = verbs.filter(item => item.enTranslation === window.location.pathname.slice(9 + firstPos));
    }
    else {
      aa = topics.filter(item => item.enTopic === window.location.pathname.slice(8));
    };
    if (aa !== undefined && aa) {
      dispatch(setCurrentDeck(aa[0]));
    };
    if (aaa !== undefined && aaa) {
      dispatch(setCurrentWord(aaa[0]));
    };
    if (aa && aaa && aa.length !== 0 && aaa.length === 0) {
      navigate(`/topics/${aa[0].enTopic}`);
    }
    if ((!aa && !aaa) || (aa.length === 0)) {
      navigate(`/`);
    }
  }, [])

  return (
    <>
      <div className="page">
        <Routes>
          <Route 
            path="/" 
            element={
              <Main />
            }>  
          </Route>
          <Route 
            path="*" 
            element={
              <PageNotFound/>
            }>
          </Route>
          <Route 
            path="/numbers" 
            element={
              <NumbersTrainPage/>
            }>
          </Route>
          {currentDeck !==null && 
          <Route 
            path="/topics/:deckItem" 
            element={
              <DeckItemPage />
            }
          >
          </Route>}
          {currentWord !==null && 
          <Route 
            path="/topics/:deckItem/:wordItem" 
            element={
              <WordItemPage />
            }
          >
          </Route>}
        </Routes>
      </div>
    </>
  );
}

export default App;
