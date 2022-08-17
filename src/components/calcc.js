import React from "react";
import useInput from "./logic";
function Calculatee() {
  const [value, input] = useInput();
  const [rat, setRat] = React.useState();
  const [calc, setCalc] = React.useState();
  let inn = (e) => {
    e.preventDefault();
    if (value < 77500) {
      let calc = value - value + 2100;
      setCalc(calc.toFixed(1));
    } else {
      let calc = value * 0.027;
      setCalc(calc.toFixed(1));
    }
    if (value > 77500) {
      let rat = (value * 0.014) / 3;
      setRat(rat.toFixed(1));
    } else {
      let rat = (value - value + 525) / 3;
      setRat(rat.toFixed(1));
    }
  };
  return (
    <div>
      <form onSubmit={inn}>
        {input}
        <button className="btn" type="sumbit">
          Oblicz
        </button>
      </form>
      <div>Oplata C {calc} zł</div>
      <div>Rata: {rat}</div>
      <div>Rata: {rat}</div>
      <div>Rata :{rat}</div>
    </div>
  );
}
export default Calculatee;
