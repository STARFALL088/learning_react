import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

// import App from "./App.jsx";
// import Chai from "./Chai.jsx";

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Game on
  </a>
);
const another = "prantor";

const reactElement = React.createElement(
  "a",
  { href: "https://comick.io/home2", target: "_blank" },
  "click me to read latest comic",
  another
);
// createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(reactElement);
