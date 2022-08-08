import React from 'react'

import useInput from './logic'
function Calculat() { 
    const [value,input]=useInput()
  const [calc,setCalc]=React.useState()
 const [rat,setRat]=React.useState()
  let inn=(e)=>{
  e.preventDefault()
  if(value<35000){
    let calc=(value-value+525)
    setCalc(calc.toFixed())
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
        <p>{calc}</p>
        <button className="btn" type="sumbit">Oblicz</button>
    </form>
    <div>Oplata A: {calc}</div>
    <div>Rata: {rat}</div>
    <div>Rata: {rat}</div>
    <div>Rata: {rat}</div>
    </div>
  )
}
export default Calculat