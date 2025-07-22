import { useState } from "react";
import Button from "./assets/Button";
function App() {
  const [color, setColor] = useState("Black");
  console.log(color);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{
        backgroundColor: color,
      }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        //style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <Button color={"White"} setColor={setColor}></Button>
          <Button color={"Purple"} setColor={setColor}></Button>
          <Button color={"Blue"} setColor={setColor}></Button>
          <Button color={"skyblue"} setColor={setColor}></Button>
          <Button color={"Green"} setColor={setColor}></Button>
          <Button color={"Yellow"} setColor={setColor}></Button>
          <Button color={"Orange"} setColor={setColor}></Button>
          <Button color={"Red"} setColor={setColor}></Button>
          <Button color={"Black"} setColor={setColor}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
