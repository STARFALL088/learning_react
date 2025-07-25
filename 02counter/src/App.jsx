import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const max_val = 20;
  const min_val = 0;
  let [counter, setCounter] = useState(0);
  //let counter = 0;
  const addvalue = () => {
    //setCounter((counter = ++counter > max_val ? max_val : counter));
    setCounter((prevCounter) => Math.min(max_val, prevCounter + 1));
    setCounter((prevCounter) => prevCounter + 1);

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  };
  const removevalue = () => {
    setCounter((counter = --counter < min_val ? min_val : counter));
  };

  return (
    <>
      <h1>Counter React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value </button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
      <footer>curr={counter}</footer>
    </>
  );
}

export default App;
