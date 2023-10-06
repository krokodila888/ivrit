import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import DeckItemPage from '../DeckItemPage/DeckItemPage.jsx';
import NumbersTrainPage from '../NumbersTrainPage/NumbersTrainPage.jsx';
import './App.css';


import { useSelector, useDispatch } from 'react-redux';
import { vocabulary, topics } from "../../utils/constants.js";
import { removeCurrentDeck, setCurrentDeck } from '../../services/actions/currentDeck.js';

function App() {

  const { currentDeck } = useSelector(state => state.currentDeckReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    let aa;
    aa = topics.filter(item => item.enTopic === window.location.pathname.slice(8));
    if (aa !== undefined) {
      dispatch(setCurrentDeck(aa[0]));
    }
  }, [])

  return (
    <>
      <div className="page">
        <Routes>
          <Route 
            exact path="/" 
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
        </Routes>
      </div>
    </>
  );
}

export default App;
