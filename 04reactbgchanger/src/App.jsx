import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("Blue")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className=' bg-white flex flex-wrap justify-center px-3 py-3 gap-3 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"red"}}>Red</button>
           <button onClick={()=> setColor("green")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> setColor("yellow")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"yellow"}}>Yellow</button>
             <button onClick={()=> setColor("purple")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"purple"}}>Purple</button>
              <button onClick={()=> setColor("blue")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"blue"}}>Blue</button>
               <button onClick={()=> setColor("white")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"white"}}>White</button>
                <button onClick={()=> setColor("black")} className='text-white outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"black"}}>Black</button>
                 <button onClick={()=> setColor("pink")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"pink"}}>Pink</button>
                  <button onClick={()=> setColor("grey")} className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"grey"}}>Grey</button>
                   <button onClick={()=> setColor("lavender")}  className='text-black outline-none shadow-lg rounded-full px-4 py-1' style={{backgroundColor:"lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
   
  )
}

export default App
