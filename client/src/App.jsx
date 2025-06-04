import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Login from './pages/Login'
import Navbar from './components/navbar'
import HeroSection from './pages/student/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <HeroSection/>
      
      <Login/>
    </main>
  )
}

export default App
