import "./style.css";
import { setupCounter } from "./tic-tac-toe.js";

document.querySelector("#app").innerHTML = `
  <div class"game">
    <h1>Hello Tic Tac Toe</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
