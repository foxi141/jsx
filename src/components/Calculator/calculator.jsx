import { Formul } from "../form/formular";
import { Result } from "../result/result";
import { useState } from "react";
import * as S from "./style.js";

import { getYear, getDaysInYear, subYears } from "date-fns";

import { INITIAL_VALUES } from "../result/utils"



export const Calculator = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [sum, setSum] = useState(0);

  const currentYear = getYear(new Date());
  const lastYear = getYear(subYears(new Date(), 1));
  const daysInCurrentYear = values.isNew
    ? getDaysInYear(new Date(values.permitStartDate))
    : getDaysInYear(new Date(currentYear));

  return (
      
      <><S.SubTitle>Nowa kalkulacja opłaty</S.SubTitle><>
      <Formul {...{ values, setValues, setSum, currentYear, lastYear }} />
      <Result
        {...{
          values,
          sum,
          setSum,
          daysInCurrentYear,
        }} /></></>
        
  
  );
};
