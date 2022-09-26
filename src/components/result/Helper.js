import { addYears, getYear } from "date-fns";

export const calculateCategoryFee = ({
  value,
  isPermit,
  isNew,
  limit,
  percentageValue,
  basicFee,
  selectedDataScope,
  daysInCurrentYear,
}) => {
  if (isPermit) {
    const currentValue =
      value <= limit || isNew == 10 ? basicFee : value * percentageValue;
    const calculateValuePerDays =
      (currentValue * selectedDataScope) / daysInCurrentYear;
    return Math.round(calculateValuePerDays * 100) / 100;
  }
  return 0;
};
export const countDiffInDays = (values) => {
  const currentYear =
    values.isNew === 10
      ? getYear(new Date(values.permitStartDate))
      : getYear(new Date());
  const nextYear =
    values.isNew === 10
      ? getYear(addYears(new Date(values.permitStartDate), 1))
      : getYear(addYears(new Date(), 1));
  const FirstDayOfCurrentYear = new Date(`${currentYear}-01-01`);
  const FirstDayOfNextYear = new Date(`${nextYear}-01-01`);
  const currentFirstDate =
    values.permitStartDate < FirstDayOfCurrentYear
      ? FirstDayOfCurrentYear
      : values.permitStartDate;
  const currentEndDate =
    values.permitEndDate > FirstDayOfCurrentYear
      ? FirstDayOfNextYear
      : values.permitEndDate;
  const diff = currentEndDate - currentFirstDate;
  if (diff < 0) {
    return 0;
  }
  const DiffInDays = Math.round(diff / (24 * 60 * 60 * 1000));
  return DiffInDays;
};
