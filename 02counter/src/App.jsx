import { useState  } from 'react'
import './App.css'

function App() {

  const [counter , setcounter] = useState(1)

  const addvalue = () =>{
    if(counter < 20){
      setcounter(counter + 1)
    }
  }
  const removevalue = () =>{
    if(counter > 0 ){
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>masti</h1>
      <h2>counter value:{counter}</h2> 
      <button onClick={addvalue}>Add Value</button>
      <br />
      <br />
      <br />
      <button onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App
