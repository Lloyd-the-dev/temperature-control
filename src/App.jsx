import { useState } from 'react'
import './App.css'

function App() {
  const [temp, setTemp] = useState(50)
  const [tempColor, setTempColor] = useState("cool")
  function increment(){
    const tempValue = temp + 1;
    setTemp(tempValue)
    changeColor(tempValue)
  }
  function decrement(){
    const tempValue = temp - 1;
    setTemp(tempValue)
    changeColor(tempValue)
  }
  function changeColor(tempValue){
    if(tempValue > 50){
      setTempColor("hot")
    }else{
      setTempColor("cool")
    }
  }
 

  return (
    <>
      <h1>Temperature Control App</h1>
      <div className="omega">
          <div className={`temperature ${tempColor}`}>
             <h3>{temp}°C</h3>
          </div>
          <div className='increments'>
              <button className='increments-item' 
              onClick={ ()=> increment()
              }>
                +
              </button>
              <button className='increments-item'
              onClick={
                () => decrement()
              }>
                -
              </button>
          </div>
      </div>


    </>
  )
}

export default App
