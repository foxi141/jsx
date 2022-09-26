import { useEffect } from "react";
import { countDiffInDays, calculateCategoryFee } from "./Helper";
export const useResult = ({ values, sum, setSum, daysInCurrentYear }) => {
  const selectedDataScope = countDiffInDays(values);
  const firstValue = calculateCategoryFee({
    value: values?.valuesOfSoldAlcoholCatA,
    isPermit: values.isPermitToSellAlcoholCatA,
    isNew: values.isNew,
    limit: 37500,
    percentageValue: 0.014,
    basicFee: 525,
    selectedDataScope,
    daysInCurrentYear,
  });
  const secondValue = calculateCategoryFee({
    value: values?.valuesOfSoldAlcoholCatB,
    isPermit: values.isPermitToSellAlcoholCatB,
    isNew: values.isNew,
    limit: 37500,
    percentageValue: 0.014,
    basicFee: 525,
    selectedDataScope,
    daysInCurrentYear,
  });
  const thirdValue = calculateCategoryFee({
    value: values?.valuesOfSoldAlcoholCatC,
    isPermit: values.isPermitToSellAlcoholCatC,
    isNew: values.isNew,
    limit: 77000,
    percentageValue: 0.027,
    basicFee: 21000,
    selectedDataScope,
    daysInCurrentYear,
  });
  const firstRate = sum / 3;
  const secondRate = sum / 3;
  const thirdRate = sum - firstRate - secondRate;
  const updateSum = () => {
    const currentSum = firstValue + secondValue + thirdValue;
    setSum(currentSum);
  };
  useEffect(() => {
    updateSum();
  }, [firstValue, secondValue, thirdValue, selectedDataScope, values]);
  return {
    firstValue,
    secondValue,
    thirdValue,
    selectedDataScope,
    firstRate,
    secondRate,
    thirdRate,
  };
};
