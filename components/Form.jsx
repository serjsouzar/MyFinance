"use client"

import React from "react";


const Form = ({finance, setFinance, submitting, handleSubmit}) => {
  return (
    <>
      <form 
        className="form_container"
        onSubmit={handleSubmit}
        >
        <div className="input_container">
          <label>Descrição</label>
          <input 
          className="input_style" type="text" 
          onChange={(e) => setFinance({...finance, desc: e.target.value})}
          />
        </div>
        <div className="input_container">
          <label>Valor</label>
          <input 
          className="input_style" type="number" 
          onChange={(e) => setFinance({...finance, amount: e.target.value})}
          />
        </div>
        <div className="radio_container">
          <div className="radio">
            <input 
              className="radio_input" type="radio" 
              onChange={() => setFinance({...finance, outcome: true})}
              />
            <label>Entradas</label>
          </div>
          <div className="radio">
            <input 
              className="radio_input" type="radio" 
              onChange={() => setFinance({...finance, outcome: false})}
              />
            <label>Saídas</label>
          </div>
        </div>
        <div className="form_btn">
          <button className="outline_btn" disabled={submitting}>ADICIONAR</button>
        </div>
      </form>
    </>
  );
};

export default Form;
