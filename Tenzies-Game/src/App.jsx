import { useState } from 'react'
import './App.css'
import Die from './Die'
import {nanoid} from 'nanoid'

export default function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const dice = []
    for (let i=0; i<10; i++) {
      const newNum = Math.floor(Math.random()*6)+1
      const newDie = {
        value: newNum,
        isHeld: true,
        id: nanoid(),
      }
      dice.unshift(newDie)
    }
    return dice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  const diceElements = dice.map(currentDie => (
  <Die 
  key={currentDie.id}
  id={currentDie.id}
  value={currentDie.value} 
  isHeld={currentDie.isHeld}
  holdDice={()=> holdDice(currentDie.id)}
  backgroundColor="white"
  />))

function holdDice(id) {
  console.log(id)
  // setDice(dice => {
  //   dice.map((currentDie) => {
  //     return {...currentDie, backgroundColor: currentDie.id === id ? "#59E391" : "white"}
  //   })
  // })


  

}

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
