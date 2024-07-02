import { useState } from 'react'
import NavBar from './components/navBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar />
  )
}

export default App
