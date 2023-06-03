import React, { useMemo, useState } from "react";
import { useEffect } from "react";

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
  return(
    <div style={{display:"flex", flexDirection:"column"}} className="">
      <h1>Test</h1>
      <div className="">
        <button onChange={count} onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h3>{count}</h3>
      </div>
    <span> {moreThan}</span>
    </div>
  )
}

export default  Test;