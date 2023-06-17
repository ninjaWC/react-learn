import React, { useMemo, useState, useRef } from "react";
import { useEffect } from "react";
import Login from "./Login";

const Test = ()=>{
  // const getName = (name)=>{
  //   setTimeout(()=>{
  //     alert(`Hello! What a beautiful name ${name}`);
  //   }, 3000)
  // }

  // useEffect(()=>{
  //   getName('Diana');
  // }, [])

  const [count, setCount] = useState(0);

  function increment (){
    setCount(count+1);
  }

  function decrement (){
    setCount(count-1);
  }

  const moreThan = useMemo(() => {
    if(count > 5) return "More than 5"
  } , [count])


  const [input, setInput] = useState('input')


  const [firstState, setFirstState]=useState(0)
  const [secState, setSecState]=useState(0)
  function noCallBack(){
    setFirstState(firstState+1);
  }
  function callBack(){
    setSecState(e => e+1);
  }
  return(
    <div style={{display:"flex", flexDirection:"column"}} className="">
      <h1>Test</h1>
      <div className="">
        <button onChange={count} onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h3>{count}</h3>
      </div>
      <span> {moreThan}</span>
      <input 
        type="text"
        value={input}
        onChange={e => { setInput(e.target.value)}}
      />
      <div>{input}</div>


      <span> Разница между двумя видами вызовов <span style={{color:"red"}}>Стейта:</span> </span>
      <div className="ncb">
        Не колбэк: 
        <div>{firstState}</div>
        <button
          onClick={noCallBack}
        >change</button>
      </div>
      <div className="cb">
        Kолбэк: 
        <div>{secState}</div>
        <button
          onClick={callBack}
        >change</button>
      </div>
    </div>
  )
}

export default  Test;