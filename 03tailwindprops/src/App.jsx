// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "prantor",
  //   age: 21,
  // };
  // let arr = [1, 2, 3];
  return (
    <>
      <h1 className="flex bg-green-400 text-black p-4 rounded-3xl">
        Tailwind Test
      </h1>
      <Card
        // channel="chaiaurcode"
        // obj={myObj}
        // obj1={arr}
        username="prantor"
      />
      <Card
        // channel="chaiaurcode"
        // obj={(myObj = { username: "talha", age: 14 })}
        username="talha"
      />
    </>
  );
}

export default App;
