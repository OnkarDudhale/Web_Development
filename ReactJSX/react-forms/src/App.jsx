import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comment from './Comment'
import Form from './Form'
import FetchAPI from './FetchAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Comment /> */}
      {/* <Form /> */}
      <FetchAPI />
    </>
  )
}

export default App
