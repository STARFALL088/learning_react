import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 0;
  const addvalue = () => {
    setCounter(++counter);
  };
  const removevalue = () => {
    setCounter(--counter);
  };
  return (
    <>
      <h1>Counter React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value curr={counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value curr={counter}</button>
      <footer>curr={counter}</footer>
    </>
  );
}

export default App;
