import React from "react";
// import App from "../App";
function Button({ color, setColor }) {
  return (
    <button
      className="outline-none px-4 py-2 rounded-2xl shadow-lg font-bold text-shadow-sky-950"
      style={{
        backgroundColor: color,
        color: "white",
        textShadow: "0 0 3px rgba(0,0,0,0.8), 0 0 5px rgba(0,0,0,0.5)",
      }}
      onClick={() => {
        setColor(color);
      }}
    >
      {color}
    </button>
  );
}

export default Button;
