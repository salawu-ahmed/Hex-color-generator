import { useState } from 'react'

import './App.css'
import RandomColor from './components/RandomColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColor />
    </>
  )
}

export default App
