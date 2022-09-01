import React, { useState } from "react";

import { Form } from "./components/form/form";
import Logic from "./components/logic";

export const App = () => {
  const [values, setValues] = useState();
  console.log({ val: values?.cost }, "outside");
  return (
    <div className="box">
      <Form {...{ setValues, values }} />

      <div className="boxbox"></div>
    </div>
  );
};
