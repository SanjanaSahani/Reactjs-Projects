import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setcounter] = useState(15)

  const addValue = () => {
    counter = counter + 1
    setcounter(counter)
  }

  const subtractValue = () => {
    counter = counter - 1
    setcounter(counter)
  }

  const clearValue = () => {
    setcounter(0)
  }

  return (
    <>
   <h1>Counter Project</h1>
   <h2>Counter Value: {counter} </h2>

   <button onClick={addValue}>Add Value</button>
   <button onClick={subtractValue}>Subtract Value</button>
   <br />
   <button onClick={clearValue}> Clear</button>
    </>
  )
}

export default App
