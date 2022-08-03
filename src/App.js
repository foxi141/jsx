import React, {useState} from 'react'
import './index.css' 
function App() {

  const [kwota ,setKwota] =useState(0)
  const [kwotab ,setKwotab]  =useState(0)
  const [kwotac ,setKwotac] =useState(0)
  const [Oplata ,setOplata ] =useState('')
  const [oplatab ,setOplatab] =useState('')
  const [oplatac ,setOplatac] =useState('')
  const [rata ,setRata] = useState ('')
  
  let liczonko = (event)=> {
    event.preventDefault()
    if (kwota <=37500){
      let Oplata=(kwota-kwota +520)
      setOplata(Oplata.toFixed(1))
    }else if (kwota > 37500) {
       let Oplata=(kwota * 0.014)
       setOplata(Oplata.toFixed(1))
    
      }
      else{
    alert('podaj liczbe')
   }
   if(kwota<37500){
    let rata=(kwota -kwota + 520/3)
      setRata(rata.toFixed(1))
    }else{
      let rata=(kwota * 0.014/3)
      setRata(rata.toFixed(1))
    }
  
  } 
  let liczenieb =(event2)=>{
    event2.preventDefault()
    if (kwotab<=37500){
      let oplatab=(kwotab - kwotab + 520)
      setOplatab(oplatab.toFixed(1))
    }else if (kwotab>37500) {
       let oplatab=(kwotab * 0.014)
       setOplatab(oplatab.toFixed(1))
    
      }
      else{
    alert('podaj liczbe')
    } 
    if(kwotab<37500){
      let rata=(kwotab -kwotab + 520/3)
        setRata(rata.toFixed(1))
      }else{
        let rata=(kwotab* 0.014/3)
        setRata(rata.toFixed(1))
      }
  
  }
  let liczeniec =(event1)=>{
    event1.preventDefault()
    if (kwotac <=77777){
      let oplatac=(kwotac - kwotac +2100)
    setOplatac(oplatac.toFixed(1))
    }else if (kwotac > 77777){
       let oplatac=(kwotac * 0.027)
       setOplatac(oplatac.toFixed(1))
    
      } 
      else{
    alert('podaj liczbe')
    } 
    if(kwotac<77777){
      let rata=(kwotac -kwotac + 2100/3)
        setRata(rata.toFixed(1))
      }else{
        let rata=(kwotac * 0.027/3)
        setRata(rata.toFixed(1))
      }
  
  }


  













  return (
    <div className="app">
     <div className="container">
      <h2 className="center">Kalkulator oplat</h2>
     
      <form onSubmit={liczonko  }>
      
      <div>

        
        <label>Ilosc sprzedanego Alkoholu kategorii A</label>
        <input value={kwota} onChange={(event) => setKwota(event.target.value)} />
        
        <button className="btn" type='sumbit'>Oblicz</button>
              
      </div> 
      
      </form>
      <form onSubmit={liczenieb}>
      <div>
        <label>Ilosc sprzedanego Alkoholu kategorii B</label>
        <input value={kwotab} onChange={(event2) => setKwotab(event2.target.value)} />
  <button className="btn" type='sumbit'>Oblicz</button>
      
      
      </div>
      </form> 
      <form onSubmit={liczeniec}>
      <div>
        <label>Ilosc sprzedanego Alkoholu kategorii C</label>
        <input value={kwotac} onChange={(event1) => setKwotac(event1.target.value)} />
  <button className="btn" type='sumbit'>Oblicz</button>
      
      
    </div>
</form>

<div className='center'>
  
  <div>Wynik A:{Oplata}zł </div>
  <div> Wynik B:{oplatab}zł</div>
  <div> Wynik C:{oplatac}zł</div>
  

  <div>Rata1: {rata} </div>
  <div>Rata2 {rata} </div>
  <div>Rata3 {rata} </div>

  </div> 








  </div>
  </div>
  );
}

export default App;
