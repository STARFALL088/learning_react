import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, SetNumAllowed] = useState(false);
  const [charAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passwordRef = useRef(null);

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
    // alert(pass);
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      {/* <button className="bg-white" onClick={passwordGenerator}>
        Generate Password
      </button>
      <p>Password: {password}</p> */}

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-1 text-orange-400 my-8 bg-gray-700">
        <p className=" text-center text-white">Password generator</p>

        <div className="flex shadow rounded-lg overflow-hidden mb-4  bg-white">
          {/* fuck */}
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-700 text-white px-2 rounded-r-lg cursor-pointer"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numAllowed}
              id="numberInput"
              onChange={() => {
                SetNumAllowed((prev) => !prev);
              }}
            />
            <label>Number:{SetNumAllowed}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={charAllowed}
              id="charInput"
              onClick={() => SetCharAllowed((prev) => !prev)}
            />

            <label>Char:{SetCharAllowed}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
