import React from "react";
import ReactDOM from "react-dom";
import useInput from "./logic";
import "./index.css"
import Calculate from './App'
import  Calculatee from "./calc";


function App() { 
  const [value,input]=useInput()
const [calc,setCalc]=React.useState()
let inn=(e)=>{
e.preventDefault()
if(value<35000){
  let calc=(value-value+520)
  setCalc(calc.toFixed())
 }else {
 let calc=(value*0.014)
setCalc(calc.toFixed(1))
 }

} 

  return (
    <div className="App">
<div>Kalkulator Oplat</div>
     
    <form onSubmit={inn}>
     <div>
      <label>Oplata A</label>
      {input} 
      <button className="btn" type='submit'>Oblicz</button>
     </div>
     </form>
     <div>Oplata A:{calc}</div>
      <hr />
      <Calculate></Calculate>
      <Calculatee></Calculatee>
      
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
