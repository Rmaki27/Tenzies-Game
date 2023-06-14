import { useState } from 'react'
import './App.css'
import Die from './Die'





export default function App() {
  function allNewDice() {
    const dice = []
    for (let i=0; i<10; i++) {
      const newNum = Math.floor(Math.random()*6)+1
      dice.unshift(newNum)
    }
    return dice
  }


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
