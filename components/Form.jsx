import React from "react";

const Form = () => {
  return (
    <>
      <div className="form_container">
        <div className="input_container">
          <label>Descrição</label>
          <input className="input_style" type="text" />
        </div>
        <div className="input_container">
          <label>Valor</label>
          <input className="input_style" type="number" />
        </div>
        <div className="radio_container">
          <div className="radio">
            <input className="radio_input" type="radio" />
            <label>Entradas</label>
          </div>
          <div className="radio">
            <input className="radio_input" type="radio" />
            <label>Saídas</label>
          </div>
        </div>
        <div className="form_btn">
          <button className="outline_btn">ADICIONAR</button>
        </div>
      </div>
    </>
  );
};

export default Form;
