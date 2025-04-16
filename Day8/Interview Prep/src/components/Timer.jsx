import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer
    if (running) {
    timer=setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return()=>clearInterval(timer);
  }, [running]);

  function handleStart() {
    setRunning(true);
    // setLoading(false);
  }

  function handlestop() {
    setRunning(false);
    // setLoading(false);
  }
function handlereset(){
    setRunning(false);
    setTime(0);
}

  return (
    <>
      <div>Timer</div>
      <h1>{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlestop}>Stop</button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
}

export default Timer;
