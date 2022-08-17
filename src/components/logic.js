import React, { useState } from "react";
import Form from "./form/form";
import "../index.css";

export default function Logic() {
  const [calc, setCalc] = useState(0);
  const getData = (data) => {
    if (data > 37500) {
      let calc = data * 0.014;
      setCalc(calc.toFixed(1));
    } else if (data < 37500) {
      let calc = data - data + 525;
      setCalc(calc.toFixed(1));
    } else {
      alert("prosze podac liczbe");
    }
  };
  const [calcs, setCalcs] = useState(0);
  const getDatas = (datas) => {
    if (datas > 37500) {
      let calcs = datas * 0.014;
      setCalcs(calcs.toFixed(1));
    } else if (datas < 37500) {
      let calcs = datas - datas + 525;
      setCalcs(calcs.toFixed(1));
    } else {
      alert("prosze podac liczbe");
    }
  };
  const [calct, setCalct] = useState(0);
  const getDatat = (datat) => {
    if (datat > 77500) {
      let calct = datat * 0.027;
      setCalct(calct.toFixed(1));
    } else if (datat < 77500) {
      let calct = datat - datat + 2100;
      setCalct(calct.toFixed(1));
    } else {
      alert("prosze podac liczbe");
    }
  };
  return (
    <div className="output">
      <Form onSubmit={getData} />
      <div className="sum">
        {calc}
        <p> Rata{calc / 3}</p>
        <p>Rata{calc / 3}</p>
        <p>Rata{calc / 3}</p>
      </div>

      <div className="sums">
        <Form onSubmit={getDatas} />
        {calcs}

        <p>Rata{calcs / 3}</p>
        <p>Rata{calcs / 3}</p>
        <p>Rata{calcs / 3}</p>
      </div>
      <div className="sumt">
        <Form onSubmit={getDatat} />
        {calct}
        <p>Rata{calct / 3}</p>
        <p> Rata{calct / 3}</p>
        <p>Rata{calct / 3}</p>
      </div>
    </div>
  );
}
