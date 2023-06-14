import { useState } from 'react'
import './App.css'
import Die from './Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = []
    for (let i=0; i<10; i++) {
      const newNum = Math.floor(Math.random()*6)+1
      dice.unshift(newNum)
    }
    return dice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map(currentValue => (<Die value={currentValue}/>))

  return (
    <>
      <main>
        <div className='dice'>
          {diceElements}
        </div>
        <button className='roll-dice' onClick={rollDice} >Roll</button>
      </main>
    </>
  )
}
