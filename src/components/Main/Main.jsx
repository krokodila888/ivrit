import React from "react";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import './Main.css';

function Main() {

  return (
    <>
      <Header />
      <main className="main__content">
        <AboutMe/>
      </main>
      <Footer />
    </>
  );
}  

export default Main;
