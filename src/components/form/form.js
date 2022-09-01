import React from "react";
import { Formik } from "formik";
import { validationSchemaForm } from "../validation";
import { useLogic } from "./../logic";

import * as C from "./../utils";
import * as S from "./../styles";

export const Form = ({ setValues, values }) => {
  const { calculation, checkCalc } = useLogic({ setValues, values });

  return (
    <div>
      
      <Formik
        {...{
          initialValues: {},
          onSubmit: (values) => setValues(values),
          validationSchema: validationSchemaForm,
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            {C.INPUTS_ARRAY.map(({ type, key }, index) => (
              <>
                <S.Input
                  key={index}
                  {...{
                    type,
                    onChange: handleChange,
                    value: values[key],
                    name: key,
                    id: key,
                  }}
                />{" "}
                <p>{checkCalc(key)}</p>
                {errors[key] && (
                  <S.Feedback {...{ id: C.FEEDBACK }}>{errors[key]}</S.Feedback>
                )}
              </>
            ))}

            <S.Button {...{ type: C.B_SUMBIT }}>Submit</S.Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
