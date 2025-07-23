import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, SetNumAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    let x = 65;
    for (let i = 0; i < 26; i++) str += String.fromCharCode(i + x);
    x = 97;
    for (let i = 0; i < 26; i++) str += String.fromCharCode(i + x);
    if (numAllowed) {
      for (let i = 0; i <= 9; i++) str += i;
    }
    if (charAllowed) {
      str += "!@#$%^&*_+=-~`?><,./:;";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    alert(pass);
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      {/* <button className="bg-white" onClick={passwordGenerator}>
        Generate Password
      </button>
      <p>Password: {password}</p> */}

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700">
        <p className=" text-center text-white">Password generator</p>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          {/* fuck */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
