import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Main from '../Main/Main.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import DeckItemPage from '../DeckItemPage/DeckItemPage.jsx';
import './App.css';

function App() {

  const { currentDeck } = useSelector(state => state.currentDeckReducer);

  return (
    <>
      <div className="page">
        <BrowserRouter>
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
            {currentDeck !==null && 
            <Route 
              path="/topics/:deckItem" 
              element={
                <DeckItemPage />
              }
            >
            </Route>}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
