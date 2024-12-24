import { useState } from 'react'
import './App.css'
import rock from "../src/images/icons8-rock-hand-96.png"
import paper from "../src/images/icons8-paper-hand-96.png"
import scissors from "../src/images/icons8-hand-scissors-96.png"

function App() {
  const [user_score, setUser_score] = useState(0)
  const [computer_score, setComputer_score] = useState(0)

  const [user_choice, setUser_choice] = useState('')
  const [computer_choice, setComputer_choice] = useState('')

  const setRock = () => {
    setUser_choice('Rock')
    let choices = ['Rock', 'Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3)
    setComputer_choice(choices[random])

    if (choices[random] === 'Rock') {
      console.log('Tie')
    } else if (choices[random] === 'Paper') {
      console.log('Computer wins')
      setComputer_score(computer_score + 1);
    } else {
      console.log('User wins')
      setUser_score(user_score + 1);
    }
  }
  const setPaper = () => {
    setUser_choice('Paper')
    let choices = ['Rock', 'Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3)
    setComputer_choice(choices[random])

    if (choices[random] === 'Paper') {
      console.log('Tie')
    } else if (choices[random] === 'Scissors') {
      console.log('Computer wins')
      setComputer_score(computer_score + 1);
    } else {
      console.log('User wins')
      setUser_score(user_score + 1);
    }
  }
  const setScissor = () => {
    setUser_choice('Scissors')
    let choices = ['Rock', 'Paper', 'Scissors']
    let random = Math.floor(Math.random() * 3)
    setComputer_choice(choices[random])

    if (choices[random] === 'Scissors') {
      console.log('Tie')
    } else if (choices[random] === 'Rock') {
      console.log('Computer wins')
      setComputer_score(computer_score + 1);
    } else {
      console.log('User wins')
      setUser_score(user_score + 1);
    }
  }

  return (
    <>
      <h1>WELCOME TO ROCK, PAPER AND SCISSORS GAME</h1>

      <div className="buttons-div">
        <button onClick={setRock}><img src={rock} alt="rock" />Rock</button>
        <button onClick={setPaper}><img src={paper} alt="rock" />Paper</button>
        <button onClick={setScissor}><img src={scissors} alt="rock" />Scissors</button>
      </div>

      <div className="choice-div">
        <p>Your choice: {user_choice}</p>
        <p>Computer's choice: {computer_choice}</p>
      </div>

      <div className="scores-div">
        <p>Your Score: {user_score}</p>
        <p>Computer Score: {computer_score}</p>
      </div>
    </>
  )
}

export default App
