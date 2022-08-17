import React from "react";
import useInput from "./logic";
function Claculate() {
  const [value, input, calcul] = useInput();
  const [rat, setRat] = React.useState();
  const [calc, setCalc] = React.useState();

  let inn = (e) => {
    e.preventDefault();
    if (value < 35000) {
      let calc = value - value + 525;
      setCalc(calc.toFixed(1));
    } else {
      let calc = value * 0.014;
      setCalc(calc.toFixed(1));
    }
    if (value > 37500) {
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
        <p>{calcul}</p>
        <div>Oplata B: {calc}</div>
        <div>Rata: {rat}</div>
        <div>Rata: {rat}</div>
        <div>Rata: {rat}</div>
      </form>
    </div>
  );
}
export default Claculate;