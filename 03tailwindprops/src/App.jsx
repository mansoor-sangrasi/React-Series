import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl '>TailwindCSS Test</h1>
    <Card username="My name is Mansoor Ahmed I am from Pakistan" btntext="Introduction"/>
    <Card username="My name is Tofique Ahmed I am from India" btntext="My detail"/>
    </>
   
  )
}

export default App
