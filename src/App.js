import { useState } from "react"
import "./App.css"
import Keypad from "./keypad"
function App(){
  let [inputs,setinputs]=useState('')
  function handleClick(value){
    setinputs(inputs+value)
  }
  function calculate(){
      let outputvalue=eval(inputs)
      setinputs(outputvalue)
  }
  function handleClear(){
    setinputs("")
  }
  return(
    <div className="container">
      <h1>Calculator App Using React</h1>
    <div className="calculoter">
      <input value={inputs} type="text" className="output"/>
    </div>
    
    <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear}/>
    </div>
  )
}
export default App