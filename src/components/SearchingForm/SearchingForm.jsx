import React from "react";
import magnifier from '../../images/magn.png';
import './SearchingForm.css';

function SearchingForm(props) {

  const { setSearch } = props;

  return (
   <form className="searchForm__form">
      <div className="searchForm__input-container">
        <input 
          className="searchForm__input" 
          type="name" 
          name="search" 
          id="search" 
          placeholder="Введите слово" 
          required 
          onChange={e => setSearch(e.target.value)}
        />
        <img 
          className="searchForm__img" 
          src={magnifier} 
          alt="Лупа" 
        />
      </div>
    </form>
  );
}  

export default SearchingForm;