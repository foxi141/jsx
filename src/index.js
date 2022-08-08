import React from "react";
import ReactDOM from "react-dom";

import "./index.css"
import Calculate from './App'
import  Calculatee from "./calc";
import Calculat from "./calcc";
function App(){


  return (
    <div className="App">
      Kalkulator Oplat
      
    <div className="container" >  
    Ilosc sprzedanego Alkoholu A
     <Calculat></Calculat>
     </div> 
     <div className="box "> 
     Ilosc sprzedanego Alkoholu B
      <Calculate></Calculate>
      </div>
      <div className="box-box">
      Ilosc sprzedanego Alkoholu C 
      <Calculatee></Calculatee>
      </div>
      </div>
      );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
