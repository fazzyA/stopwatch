import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [time, setTime] = useState(10);
  const [num, setnum] = useState(11);
  const ref = useRef(0);
  console.log(ref);
  useEffect(() => {
    console.log("im in useeffect");
    setTimeout(() => {
      setTime(25);
    }, 3000);
  }, []);
  return (
    <div>
      Stopwatch {time} {num} {ref.current}
      <button onClick={(e) => setnum(12)}>clickme</button>
    </div>
  );
}

export default App;
