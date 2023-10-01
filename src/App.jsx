import { useState } from "react"

import './App.css';

function App() {
  const d = new Date();
 let onlyDate = d.toDateString()
 let saveDate ;
  const [myCounter, setMyCounter] = useState([onlyDate])
  const [stepCounter, setStepCounter] = useState(0)
  const [countCounter, setCountCounter] = useState(0)
  
  
  
  




// ////////////////////////////////////   Plus
function countPlusHandler(){
  setCountCounter(Number(countCounter)+Number(stepCounter))
  const newDate = new Date(myCounter)
  const incrementDate = newDate.setDate(newDate.getDate()+Number(stepCounter))
  const dateset = new Date(incrementDate)
  saveDate = dateset.toDateString()
  setMyCounter(saveDate)
  

  
  
}
  

//  /////////////////////// Minus
function countMinusHandler(){
  setCountCounter(countCounter-stepCounter)
  const newDate = new Date(myCounter)
  const incrementDate = newDate.setDate(newDate.getDate()-stepCounter)
  const dateset = new Date(incrementDate)
  saveDate = dateset.toDateString()
  setMyCounter(saveDate)
  

}
  
  
  
  
  return (
    <div className="App">
       <div className="d-flex justify-content-space-evenly align-items-center">
              <input
                type="range"
                className="form-range mx-2 mb-3"
                min="0"
                max="20"
                step="1"
                value={stepCounter}
                id="customRange1"
                onChange={(e) => {
                  setStepCounter(e.target.value);
                }}
              />
              <p>{stepCounter}</p>
            </div>
    
    <div className='countDiv'>
      <button className='countMinus' onClick={countMinusHandler}>-</button>
      <h3 className='countentCount'>Count: </h3 ><h3 className='count'>{countCounter}</h3>
      <button className='countPlus' onClick={countPlusHandler}>+</button>
    </div>
    <p className="contentShow"><span>{countCounter == 0 ? "" : countCounter == 1 ? countCounter +" day from " :countCounter == -1 ? countCounter +" day from " :countCounter +" days from " }</span>Today is {myCounter} </p>

    <button className="btnReset" onClick={()=>{setCountCounter(0), setMyCounter(onlyDate)}}>Reset</button>
    </div>
  );
}

export default App;
