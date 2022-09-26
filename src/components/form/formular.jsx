import React, { useEffect } from "react";
import { Form, Formik } from "formik";

import Datepicker, { registerLocale } from "react-datepicker";
import { Button, FormGroup, FormFeedback, Label, Input, Row } from "reactstrap";
import pl from "date-fns/locale/pl";

import { validationSchema } from "./validation.rules";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

import * as S from "./styles";

registerLocale("pl", pl);

const HandleValues = ({ values, setFieldValue }) => {
  useEffect(() => {
    if (values.isNew === 10) {
      setFieldValue("valueOfSalesAlcoholCategoryA", 0);
      setFieldValue("valueOfSalesAlcoholCategoryB", 0);
      setFieldValue("valueOfSalesAlcoholCategoryC", 0);
    }
  }, [values.isNew]);

  return null;
};

export const Formul = ({
  values,
  setValues,
  setSum,
  currentYear,
  lastYear,
}) => (
  <S.Wrapper>
    <Formik
      {...{
        initialValues: values,
        onSubmit: (values) => {
          setValues(values);
        },
        validationSchema: validationSchema({ currentYear, lastYear }),
      }}
    >
      {({
        values,
        touched,
        errors,
        handleSubmit,
        handleReset,
        handleChange,
        handleBlur,
        setFieldValue,
      }) => {
        return (
          <>
            <FormGroup className="d-flex pt-3">
              <S.StyledLabel for="isNew" style={{ minWidth: "130px" }}>
                Nowe zezwolenie:
              </S.StyledLabel>
              <Input
                {...{
                  type: "select",
                  onChange: (e) =>
                    setFieldValue("isNew", parseInt(e.target.value)),
                  onBlur: handleBlur ?? undefined,
                  value: values.isNew,
                  name: "isNew",
                  style: {
                    position: "relative",
                    minWidth: "180px",
                    bottom: "5px",
                  },
                }}
              >
                {[
                  { name: "TAK", value: 10 },
                  {
                    name: "NIE (kontynuacja dotychczasowego zezwolenia)",
                    value: 20,
                  },
                ].map((option, id) => (
                  <option
                    key={id}
                    {...{
                      value: option.value,
                    }}
                  >
                    {option.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <S.SubTitle>Nowa kalkulacja opłaty</S.SubTitle>
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <Row className="d-flex justify-content-between">
                <FormGroup className="d-flex ">
                  <S.StyledLabel for="isPermitToSellAlcoholCategoryA">
                    Zezwolenie na sprzedaż alkoholi kategorii A:
                  </S.StyledLabel>
                  <div className="d-flex">
                    <Input
                      {...{
                        type: "checkbox",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        checked: values.isPermitToSellAlcoholCategoryA,
                        name: "isPermitToSellAlcoholCategoryA",
                        invalid:
                          !!errors.isPermitToSellAlcoholCategoryA &&
                          !!touched.isPermitToSellAlcoholCategoryA,
                      }}
                    />
                    {!!errors.isPermitToSellAlcoholCategoryA &&
                      !!touched.isPermitToSellAlcoholCategoryA && (
                        <FormFeedback
                          invalid
                          className={`text-danger text-small mx-2 ${
                            !!touched.isPermitToSellAlcoholCategoryA &&
                            !!errors.isPermitToSellAlcoholCategoryA &&
                            "d-block"
                          }`}
                        >
                          {errors.isPermitToSellAlcoholCategoryA}
                        </FormFeedback>
                      )}
                  </div>
                </FormGroup>
              </Row>
              <FormGroup>
                <Label for="valueOfSalesAlcoholCategoryA">
                  Wartość sprzedaży dla kategorii A w roku ubiegłym
                </Label>
                <S.InputWrapper>
                  <Input
                    {...{
                      type: "number",
                      onChange: (e) =>
                        setFieldValue(
                          "valueOfSalesAlcoholCategoryA",
                          typeof e.target.value === "number"
                            ? parseInt(e.target.value)
                            : e.target.value
                        ),
                      onBlur: handleBlur,
                      value: values.valueOfSalesAlcoholCategoryA,
                      name: "valueOfSalesAlcoholCategoryA",
                      disabled: values.isNew === 10,
                      invalid:
                        !!errors.valueOfSalesAlcoholCategoryA &&
                        !!touched.valueOfSalesAlcoholCategoryA,
                    }}
                  />
                  <S.Format>PLN</S.Format>
                </S.InputWrapper>
                {!!errors.valueOfSalesAlcoholCategoryA &&
                  !!touched.valueOfSalesAlcoholCategoryA && (
                    <FormFeedback
                      invalid
                      className={`text-danger text-small ${
                        !!touched.valueOfSalesAlcoholCategoryA &&
                        !!errors.valueOfSalesAlcoholCategoryA &&
                        "d-block"
                      }`}
                    >
                      {errors.valueOfSalesAlcoholCategoryA}
                    </FormFeedback>
                  )}
              </FormGroup>
              <Row className="d-flex justify-content-between pt-3">
                <FormGroup className="d-flex">
                  <S.StyledLabel for="isPermitToSellAlcoholCategoryB">
                    Zezwolenie na sprzedaż alkoholi kategorii B:
                  </S.StyledLabel>
                  <div className="d-flex">
                    <Input
                      {...{
                        type: "checkbox",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        checked: values.isPermitToSellAlcoholCategoryB,
                        name: "isPermitToSellAlcoholCategoryB",
                        invalid:
                          !!errors.isPermitToSellAlcoholCategoryB &&
                          !!touched.isPermitToSellAlcoholCategoryB,
                      }}
                    />
                    {!!errors.isPermitToSellAlcoholCategoryB &&
                      !!touched.isPermitToSellAlcoholCategoryB && (
                        <FormFeedback
                          invalid
                          className={`text-danger text-small mx-2 ${
                            !!touched.isPermitToSellAlcoholCategoryA &&
                            !!errors.isPermitToSellAlcoholCategoryB &&
                            "d-block"
                          }`}
                        >
                          {errors.isPermitToSellAlcoholCategoryB}
                        </FormFeedback>
                      )}
                  </div>
                </FormGroup>
              </Row>
              <FormGroup>
                <Label for="valueOfSalesAlcoholCategoryB">
                  Wartość sprzedaży dla kategorii B w roku ubiegłym
                </Label>
                <S.InputWrapper>
                  <Input
                    {...{
                      type: "number",
                      onChange: (e) =>
                        setFieldValue(
                          "valueOfSalesAlcoholCategoryB",
                          typeof e.target.value === "number"
                            ? parseInt(e.target.value)
                            : e.target.value
                        ),

                      onBlur: handleBlur,
                      value: values.valueOfSalesAlcoholCategoryB,
                      name: "valueOfSalesAlcoholCategoryB",
                      disabled: values.isNew === 10,
                      invalid:
                        !!errors.valueOfSalesAlcoholCategoryB &&
                        !!touched.valueOfSalesAlcoholCategoryB,
                    }}
                  />
                  <S.Format>PLN</S.Format>
                </S.InputWrapper>
                {!!errors.valueOfSalesAlcoholCategoryB &&
                  !!touched.valueOfSalesAlcoholCategoryB && (
                    <FormFeedback
                      invalid
                      className={`text-danger text-small ${
                        !!touched.valueOfSalesAlcoholCategoryB &&
                        !!errors.valueOfSalesAlcoholCategoryB &&
                        "d-block"
                      }`}
                    >
                      {errors.valueOfSalesAlcoholCategoryB}
                    </FormFeedback>
                  )}
              </FormGroup>
              <Row className="d-flex justify-content-between pt-3">
                <FormGroup className="d-flex">
                  <S.StyledLabel for="isPermitToSellAlcoholCategoryC">
                    Zezwolenie na sprzedaż alkoholi kategorii C:
                  </S.StyledLabel>
                  <div className="d-flex">
                    <Input
                      {...{
                        type: "checkbox",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        checked: values.isPermitToSellAlcoholCategoryC,
                        name: "isPermitToSellAlcoholCategoryC",
                        invalid:
                          !!errors.isPermitToSellAlcoholCategoryC &&
                          !!touched.isPermitToSellAlcoholCategoryC,
                      }}
                    />
                    {!!errors.isPermitToSellAlcoholCategoryC &&
                      !!touched.isPermitToSellAlcoholCategoryC && (
                        <FormFeedback
                          invalid
                          className={`text-danger text-small mx-2 ${
                            !!touched.isPermitToSellAlcoholCategoryC &&
                            !!errors.isPermitToSellAlcoholCategoryC &&
                            "d-block"
                          }`}
                        >
                          {errors.isPermitToSellAlcoholCategoryC}
                        </FormFeedback>
                      )}
                  </div>
                </FormGroup>
              </Row>
              <FormGroup>
                <Label for="valueOfSalesAlcoholCategoryC">
                  Wartość sprzedaży dla kategorii C w roku ubiegłym
                </Label>
                <S.InputWrapper>
                  <Input
                    {...{
                      type: "number",
                      onChange: (e) =>
                        setFieldValue(
                          "valueOfSalesAlcoholCategoryC",
                          typeof e.target.value === "number"
                            ? parseInt(e.target.value)
                            : e.target.value
                        ),
                      onBlur: handleBlur,
                      value: values.valueOfSalesAlcoholCategoryC,
                      name: "valueOfSalesAlcoholCategoryC",
                      disabled: values.isNew === 10,
                      invalid:
                        !!errors.valueOfSalesAlcoholCategoryC &&
                        !!touched.valueOfSalesAlcoholCategoryC,
                    }}
                  />
                  <S.Format>PLN</S.Format>
                </S.InputWrapper>
                {!!errors.valueOfSalesAlcoholCategoryC &&
                  !!touched.valueOfSalesAlcoholCategoryC && (
                    <FormFeedback
                      invalid
                      className={`text-danger text-small ${
                        !!touched.valueOfSalesAlcoholCategoryC &&
                        !!errors.valueOfSalesAlcoholCategoryC &&
                        "d-block"
                      }`}
                    >
                      {errors.valueOfSalesAlcoholCategoryC}
                    </FormFeedback>
                  )}
              </FormGroup>
              <FormGroup>
                <Label for={"permitStartDate"}>
                  Data początkowa ważności zezwolenia:
                </Label>
                <S.DatePickerWrapper>
                  <Datepicker
                    {...{
                      name: "permitStartDate",
                      wrapperClassName: "datepicker",
                      className:
                        !!touched.permitStartDate && errors.permitStartDate
                          ? "form-control border-danger w-100"
                          : "form-control w-100",

                      dateFormat: "dd/MM/yyyy",
                      selected:
                        (values.permitStartDate &&
                          new Date(values.permitStartDate)) ||
                        null,
                      onChange: (value) =>
                        setFieldValue("permitStartDate", value),
                      autoComplete: "off",
                      locale: "pl",
                      minDate: null,
                      maxDate: null,
                    }}
                  />
                  <S.IconWrapper>
                    <S.CalendarIcon size={32} />
                  </S.IconWrapper>
                </S.DatePickerWrapper>
                {!!touched.permitStartDate && errors.permitStartDate && (
                  <p className={"text-danger h1 small mt-1"}>
                    {errors.permitStartDate}
                  </p>
                )}
              </FormGroup>
              <FormGroup>
                <Label for={"permitEndDate"}>
                  Data końcowa ważności zezwolenia:
                </Label>
                <S.DatePickerWrapper>
                  <Datepicker
                    {...{
                      name: "permitEndDate",
                      wrapperClassName: "datepicker",
                      className:
                        !!touched.permitEndDate && errors.permitEndDate
                          ? "form-control border-danger w-100"
                          : "form-control w-100",
                      dateFormat: "dd/MM/yyyy",
                      selected:
                        (values.permitEndDate &&
                          new Date(values.permitEndDate)) ||
                        null,
                      onChange: (value) =>
                        setFieldValue("permitEndDate", value),
                      autoComplete: "off",
                      minDate: null,
                      maxDate: null,
                      locale: "pl",
                    }}
                  />
                  <S.IconWrapper>
                    <S.CalendarIcon size={32} />
                  </S.IconWrapper>
                </S.DatePickerWrapper>
                {!!touched.permitEndDate && errors.permitEndDate && (
                  <p className={"text-danger h1 small mt-1"}>
                    {errors.permitEndDate}
                  </p>
                )}
              </FormGroup>
              <S.ButtonGroup>
                <Button type="reset" onClick={() => setSum(0)}>
                  Wyczyść
                </Button>
                <Button type="submit" color="primary">
                  Oblicz
                </Button>
              </S.ButtonGroup>
              <HandleValues {...{ values, setFieldValue }} />
            </Form>
          </>
        );
      }}
    </Formik>
  </S.Wrapper>
);
