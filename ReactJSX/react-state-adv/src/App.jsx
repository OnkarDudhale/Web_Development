import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiceBoard from './DiceBoard'
import ToDo from './ToDo'
import Lottery from './Lottery';
import { isWinningSum } from './lotteryTicket'
import Form from './Form'
import Comment from './Comment'

function App() {
  // const winningCondition = (ticket) => {
  // return ticket.every((num) => (num === ticket[0]))
  //   return isWinningSum(ticket) === 12;
  // }

  return (
    <>
      {/* <DiceBoard/> */}
      <ToDo />
      {/* <Lottery size={3} winningCondition={winningCondition} /> */}
      {/* <Form /> */}
      {/* <Comment /> */}
    </>
  )
}

export default App
