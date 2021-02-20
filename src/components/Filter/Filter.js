import React, { useState } from "react";
import "./filter.css";

export function Filter({ setFilters }) {
  const [creditAmount, setCreditAmount] = useState("");
  const [terms, setTerms] = useState("");
  function handleChangeCreditAmount(e) {
    setCreditAmount(e.target.value);
  }
  function handleChangeTerms(e) {
    setTerms(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFilters({ term: Number(terms) * 12, amount: Number(creditAmount) });
  }

  return (
    <form className='filters' onSubmit={handleSubmit}>
      <div className='filters__wrapper'>
        <label
          htmlFor='filters__realtyPrice_labelId'
          className='filters__realtyPrice_label'
        >
          <span className='filters__span'>Цена недвижимости:</span>
        </label>
        <input
          type='number'
          name='realtyPrice'
          value={creditAmount}
          id='filters__realtyPrice_labelId'
          className='filters__input'
          onChange={handleChangeCreditAmount}
        ></input>
        <label
          htmlFor='filters__mortgageTerm_inputId'
          className='filters__mortgageTerm_label'
        >
          <span className='filters__span'>Срок ипотеки:</span>
        </label>
        <input
          type='number'
          name='mortgageTerm'
          value={terms}
          id='filters__mortgageTerm_inputId'
          className='filters__input'
          onChange={handleChangeTerms}
        ></input>
      </div>
      <div className='filters__buttonWrapper'>
        <button className='filters__buttonWrapper_button' type='submit'>
          Рассчитать ипотеку
        </button>
      </div>
    </form>
  );
}
