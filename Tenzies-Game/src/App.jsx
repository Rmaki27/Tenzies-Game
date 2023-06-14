import { useState } from 'react'
import './App.css'
import Die from './Die'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='dice'>
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
          <Die value= "1" />
        </div>
      </main>
    </>
  )
}

export default App
