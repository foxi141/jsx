import React from "react";
import useInput from "./logic";
function Calculatee(){
    const [value,input]=useInput()
    const[rat,setRat]=React.useState()
    const [calc,setCalc]=React.useState()
    let inn=(e)=>{
    e.preventDefault()
    if(value<77500){
      let calc=(value-value+2100)
      setCalc(calc.toFixed(1))
     }else {
     let calc=(value*0.027)
    setCalc(calc.toFixed(1))
     }
     let rat=(calc/3)
     setRat(rat.toFixed(0))
    } 
return(
   <div>
   <form onSubmit={inn}>
       
        <p>{input}</p>
        <button className="btn" type="sumbit">Oblicz</button>
    </form>
    <div>Oplata C {calc} zł</div>
    <div>Rata: {rat}</div>
    <div>Rata: {rat}</div>
    <div>Rata :{rat}</div>
    </div>
)

}
export default Calculatee