import React from "react";
import useInput from "./logic";
function Calculatee(){
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
    
return(
   <div>
   <form onSubmit={inn}>
       
        {input}
        <button className="btn" type="sumbit">Oblicz</button>
    </form>
  
    <div>Oplata C{calc}</div>
    </div>
)




}
export default Calculatee