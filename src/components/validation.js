import * as yup from "yup";
import * as C from "./utils";

export const validationSchemaForm = yup.object().shape({
  [C.COST]: yup.number().required("Wymagane"),
  [C.INPUT_COST]: yup.number().notRequired(),
});
