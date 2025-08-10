import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <>
    <div className='bg-[url(/bg-image.png)] bg-cover bg-fixed min-h-screen'><Pokemon /></div>
      
    </>
  )
}

export default App
