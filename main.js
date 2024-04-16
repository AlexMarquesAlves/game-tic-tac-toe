import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class"game">
    <h1>Hello Tic Tac Toe</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
