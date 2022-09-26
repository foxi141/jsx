import { startOfYear, endOfYear } from "date-fns";
export const INITIAL_VALUES = {
  isNew: 10,
  isPermitToSellAlcoholCategoryA: false,
  valueOfSalesAlcoholCategoryA: 0,
  isPermitToSellAlcoholCategoryB: false,
  valueOfSalesAlcoholCategoryB: 0,
  isPermitToSellAlcoholCategoryC: false,
  valueOfSalesAlcoholCategoryC: 0,
  permitStartDate: startOfYear(new Date().setHours(0, 0, 0, 0)),
  permitEndDate: endOfYear(new Date().setHours(23, 59, 59, 999)),
};
