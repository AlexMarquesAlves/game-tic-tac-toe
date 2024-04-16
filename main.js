import "./style.css";
import { tic_tac_toe } from "./tic-tac-toe.js";

document.querySelector("#app").innerHTML = `
  <div class"game">
    <h1>Hello Tic Tac Toe</h1>
  </div>
`;

tic_tac_toe(document.querySelector("#app"));
