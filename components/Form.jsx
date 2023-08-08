"use client";

import React from "react";
import Grid from "./Grid";

const Form = ({
  desc,
  setDesc,
  amount,
  setAmount,
  isChecked,
  setIsChecked,
  submitting,
  handleSubmit,
  myFinances,
  setMyFinances
}) => {
  return (
    <>
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="input_container">
          <label>Descrição</label>
          <input
            className="input_style"
            type="text"
            value={desc}
            onChange={(e) => setDesc( e.target.value )}
          />
        </div>
        <div className="input_container">
          <label>Valor</label>
          <input
            className="input_style"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="radio_container">
          <div className="radio">
            <input
              className="radio_input"
              type="radio"
              id="rIncome"
              name="group1"
              defaultChecked
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="rIncome">Entradas</label>
          </div>
          <div className="radio">
            <input
              className="radio_input"
              id="rOutcome"
              name="group1"
              type="radio"
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="rOutcome">Saídas</label>
          </div>
        </div>
        <div className="form_btn">
          <button className="outline_btn" disabled={submitting}>
            ADICIONAR
          </button>
        </div>
      </form>
      <Grid itens={myFinances} setItens={setMyFinances}/>
    </>
  );
};

export default Form;
