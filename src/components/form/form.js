import { useState } from "react";
import Btn from "../Button";
import "./index.css";

const Form = (props) => {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inpt"
          type="number"
          value={value}
          onChange={handleChange}
        />

        <Btn type="submit" />
      </form>
    </div>
  );
};
export default Form;
