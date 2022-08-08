import React from "react";
import useInput from "./logic";
function Claculate(){
    const [value,input,calcul]=useInput()
    const [calc,setCalc]=React.useState()
    const[rat,setRat]=React.useState()
    let inn=(e)=>{
    e.preventDefault()
    if(value<35000){
      let calc=(value-value+525)
      setCalc(calc.toFixed(1))
     }else {
     let calc=(value*0.014)
    setCalc(calc.toFixed(1))
     }
     let rat=(calc/3)
     setRat(rat.toFixed(0))
    } 
    
return(
   <div>
   <form onSubmit={inn}>
       
        {input}
        <p>{calcul}</p>
        <button className="btn" type="sumbit">Oblicz</button>
    </form>
  
    <div>Oplata B: {calc}</div>
    <div>Rata: {rat}</div>
    <div>Rata: {rat}</div>
    <div>Rata: {rat}</div>
    </div>
)




}
export default Claculate