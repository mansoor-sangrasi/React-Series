import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
 let [counterValue,setcounterValue]=useState(6) 
  
  function increment(){
    if(counterValue>=0 && counterValue<20){ 
    counterValue=counterValue + 1
    setcounterValue(counterValue)
    }
    else{
      console.log("Value not increase after 20")
    }
  }
  

  function decrement(){
    if(counterValue>=1){
    counterValue=counterValue - 1
    setcounterValue(counterValue)
    }
    else{
      console.log("Value not decrease")
    }
  }

  return (
    <>
    <h1>React-Series</h1>
    <h2>Counter value:{counterValue}</h2>
    <button onClick={increment}>Add Value</button>
    <br />
    <button onClick={decrement}>Decrease Value</button>

    </>
  )
}

export default App
