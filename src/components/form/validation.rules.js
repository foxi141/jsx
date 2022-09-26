import * as yup from "yup";

export const validationSchema = ({ currentYear, lastYear }) =>
  yup.object().shape({
    valueOfSalesAlcoholCategoryA: yup
      .number()
      .nullable()
      .when("isPermitToSellAlcoholCategoryA", {
        is: true,
        then: yup.number().required("Pole jest wymagane"),
      }),
    valueOfSalesAlcoholCategoryB: yup
      .number()
      .nullable()
      .when("isPermitToSellAlcoholCategoryB", {
        is: true,
        then: yup.number().required("Pole jest wymagane"),
      }),
    valueOfSalesAlcoholCategoryC: yup
      .number()
      .nullable()
      .when("isPermitToSellAlcoholCategoryC", {
        is: true,
        then: yup.number().required("Pole jest wymagane"),
      }),
    permitStartDate: yup
      .date()
      .when("isNew", {
        is: 10,
        then: yup
          .date()
          .min(
            `${currentYear}-01-01`,
            "Dla nowego zezwolenia data początkowa nie może być mniejsza niż bieżący rok"
          ),
      })
      .when("isNew", {
        is: 20,
        then: yup
          .date()
          .max(
            `${lastYear}-12-31`,
            "Dla kontynuacji zezwolenia data początkowa nie może być późniejsza od roku bieżącego"
          ),
      }),
    permitEndDate: yup
      .date()
      .nullable()
      .when("isNew", {
        is: 20,
        then: yup
          .date()
          .min(
            `${currentYear}-01-01`,
            "Dla kontynuacji zezwolenia data końcowa nie może być wcześniejsza od roku bieżącego"
          ),
      })
      .when("permitStartDate", (permitStartDate, schema) =>
        schema.min(
          permitStartDate,
          "Data końcowa zezwolenia nie może być mniejsza od daty początkowej"
        )
      ),
    isPermitToSellAlcoholCategoryA: yup
      .boolean()
      .test(
        "checkboxValidation-A",
        "Wymagana jest przynajmniej jedna kategoria",
        function (value) {
          const {
            isPermitToSellAlcoholCategoryB,
            isPermitToSellAlcoholCategoryC,
          } = this.parent;

          if (
            !value &&
            !isPermitToSellAlcoholCategoryB &&
            !isPermitToSellAlcoholCategoryC
          ) {
            return false;
          }

          return true;
        }
      ),
    isPermitToSellAlcoholCategoryA: yup
      .boolean()
      .test(
        "checkboxValidation-A",
        "Wymagana jest przynajmniej jedna kategoria",
        function (value) {
          const {
            isPermitToSellAlcoholCategoryB,
            isPermitToSellAlcoholCategoryC,
          } = this.parent;

          if (
            !value &&
            !isPermitToSellAlcoholCategoryB &&
            !isPermitToSellAlcoholCategoryC
          ) {
            return false;
          }
          return true;
        }
      ),

    isPermitToSellAlcoholCategoryB: yup
      .boolean()
      .test(
        "checkboxValidation-B",
        "Wymagana jest przynajmniej jedna kategoria",
        function (value) {
          const {
            isPermitToSellAlcoholCategoryA,
            isPermitToSellAlcoholCategoryC,
          } = this.parent;

          if (
            !value &&
            !isPermitToSellAlcoholCategoryA &&
            !isPermitToSellAlcoholCategoryC
          ) {
            return false;
          }
          return true;
        }
      ),

    isPermitToSellAlcoholCategoryC: yup
      .boolean()
      .test(
        "checkboxValidation-C",
        "Wymagana jest przynajmniej jedna kategoria",
        function (value) {
          const {
            isPermitToSellAlcoholCategoryA,
            isPermitToSellAlcoholCategoryB,
          } = this.parent;

          if (
            !value &&
            !isPermitToSellAlcoholCategoryA &&
            !isPermitToSellAlcoholCategoryB
          ) {
            return false;
          }
          return true;
        }
      ),
  });
