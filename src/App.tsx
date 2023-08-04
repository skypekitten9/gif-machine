import React, { useState } from "react";
import "./App.css";
import { Gif } from "./component/gif.component";
import { useMachine } from "@xstate/react";
import { gifMachine } from "./machine/gifMachine";

type SendType = ReturnType<typeof useMachine>[1];

function App() {
  const [state, send] = useMachine(gifMachine);
  console.log("State: ", state.value);
  return (
    <div className="App">
      <div id="center-div">
        <Gif />
        <button
          onClick={() => send("PLAY")}
          style={{ backgroundColor: "#73B2D9" }}
        >
          👅💧
        </button>
        <button
          onClick={() => send("PAUSE")}
          style={{ backgroundColor: "#fdaaaa" }}
        >
          👅❌
        </button>
      </div>
    </div>
  );
}

export default App;
