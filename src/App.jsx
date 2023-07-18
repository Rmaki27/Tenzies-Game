import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Die from './Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'


export default function App() {
  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)
  const btnEl = document.getElementById('button')
  const mainContainerEl = document.getElementById('main-container')

  useEffect(() => {
    const heldDice = dice.every(currentDie => 
      currentDie.isHeld)

      const sameValue = dice.every(currentDie => 
        currentDie.value === dice[0].value)

      if (heldDice && sameValue) {
        setTenzies(true)
      }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.floor(Math.random()*6)+1,
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const dice = []
    for (let i=0; i<10; i++) {
      dice.unshift(generateNewDie())
    }
    return dice
  }

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice)
      setTenzies(false)
    }
    else {
      setDice(oldDice => oldDice.map( currentDie => {
        return currentDie.isHeld ? 
        currentDie : 
        generateNewDie()}))
  }
}

  const diceElements = dice.map(currentDie => (
  <Die 
  key={currentDie.id}
  value={currentDie.value} 
  isHeld={currentDie.isHeld}
  holdDice={()=> holdDice(currentDie.id)}
  backgroundColor="white"
  />))

function holdDice(id) {
  setDice(oldDice => 
    oldDice.map(currentDie => {
      return currentDie.id === id ?
      {...currentDie, isHeld: !currentDie.isHeld} : 
      currentDie
    }))
}

  return (
    <>
      <main>
        {tenzies && <Confetti />} 
        <div className='title-container'>
        <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>

        <div className='dice'>
          {diceElements}
        </div>
        <button 
        className='roll-dice' 
        onClick={rollDice} 
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  )
}
