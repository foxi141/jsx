import React, { useState, useEffect } from "react";

import "../index.css";

import * as C from "./utils";

export const useLogic = ({ values, setValues }) => {
  const [calculation, setCalculation] = useState(0);
  const [calculations, setCalculations] = useState(0);
  const [calculationt, setCalculationt] = useState(0);

  const { cost, input_cost, input_costt } = values ?? {};
  const caluclate = () => {
    if (!cost) {
      setCalculation();
      return;
    }

    if (cost > 37500) {
      setCalculation(cost * 0.014);
      return;
    }

    setCalculation(cost - cost + 525);
  };

  const calculates = () => {
    if (input_cost > 37500) {
      setCalculations(input_cost * 0.014);
      return;
    }

    setCalculations(input_cost-input_cost+525);
  };
  const calculatet = () => {
    if (input_costt > 77500) {
      setCalculationt(input_costt * 0.014);
      return;
    }
    setCalculationt(input_costt - input_costt + 2100);
  };

  const checkCalc = (key) => {
    switch (key) {
      case C.COST:
        return calculation;
      case C.INPUT_COST:
        return calculations;
      case C.INPUT_COSTT:
        return calculationt;
    }
  };

  useEffect(() => {
    caluclate();
    calculates();
    calculatet();
  }, [values]);

  return {
    calculation,
    checkCalc,
  };
};
