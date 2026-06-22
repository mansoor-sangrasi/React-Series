import {  useRef, useEffect, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow]=useState(false)
  const [charAllow,setCharAllow]=useState(false)
  const [password,setPassword]=useState("")

  // useRef Hook
 const passwordref=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let password=""
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

    if(numAllow){
      string+="0123456789"
    }
    if(charAllow){
      string+="!@#$%&*~[]{}"
    }

    for (let i =1; i<=length; i++){
      let char=Math.floor(Math.random()*string.length + 1)
      password+=string.charAt(char)
    }
    setPassword(password)
  }, [length,numAllow,charAllow,setPassword])

   const copyPassword=useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setselectionrange(0,101)
    window.navigator.clipboard.writeText(password)
    

  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllow,charAllow,passwordGenerator])
  

  return (
    <>
     <div className=' text-black-200 w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 bg-purple-100'>
      <h1 className='text-center py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordref}
        className='outline-none w-full py-1 px-3 bg-white text-black' />
        
        <button onClick={copyPassword}  className='outline-none bg-orange-300 text-white px-3 py-0.5 shrink-0'>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
           />
          <label>Length:{length}</label> 
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllow}
          id='numberInput'
          onChange={()=>{setNumAllow((prev)=>!prev)}}
           />
          <label>Number</label> 
           <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='numberInput'
          onChange={()=>{setCharAllow((prev)=>!prev)}}
           />
          <label>Character</label> 
          
        </div>
        </div>  


     </div>
    </>
  )
}

export default App
