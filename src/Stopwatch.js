import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const intervalRef = useRef(null);
  const [startTime, setTime] = useState(null);
  const [now, setNow] = useState(null);
  function handleStart() {
    setTime(Date.now());
    setNow(Date.now());
    // clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  }
  function handleStop() {
    console.log("im in stop");
    clearInterval(intervalRef.current);
  }
  let timePassed = 0;
  timePassed = (now - startTime) / 1000;

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      {timePassed.toFixed(3)}
      <br />
      <button onClick={handleStart}>Start</button>
      {"      "}
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Stopwatch;
