import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Gif,
  GIF_ID,
  PAUSED_CLASS,
  PLAYING_CLASS,
} from "./component/gif.component";
import { useMachine } from "@xstate/react";
import { gifMachine } from "./machine/gifMachine";
import { stat } from "fs";

const PLAYING_TITLE = "slurp, slurp";
const PAUSED_TITLE = "go ahead, take a sip";
type SendType = ReturnType<typeof useMachine>[1];

function Pause(
  setTitleState: React.Dispatch<React.SetStateAction<string>>,
  send: SendType,
) {
  send("PAUSE");
  const gifElement = document.getElementById(GIF_ID);
  if (gifElement) {
    gifElement.classList.remove(PLAYING_CLASS);
    gifElement.classList.add(PAUSED_CLASS);
    setTitleState(PAUSED_TITLE);
  } else {
    console.error(`Unable to find an element with ${GIF_ID}`);
  }
}

function Play(
  setTitleState: React.Dispatch<React.SetStateAction<string>>,
  send: SendType,
) {
  send("PLAY");
  const gifElement = document.getElementById(GIF_ID);
  if (gifElement) {
    gifElement.classList.remove(PAUSED_CLASS);
    gifElement.classList.add(PLAYING_CLASS);
    setTitleState(PLAYING_TITLE);
  } else {
    console.error(`Unable to find an element with ID: ${GIF_ID}`);
  }
}

function App() {
  const [titleState, setTitleState] = useState(PAUSED_TITLE);
  const [state, send] = useMachine(gifMachine);
  console.log("State: ", state.value);
  return (
    <div className="App">
      <div id="center-div">
        <p id="title">{titleState}</p>
        <Gif />
        <button
          onClick={() => Play(setTitleState, send)}
          style={{ backgroundColor: "#73B2D9" }}
        >
          👅💧
        </button>
        <button
          onClick={() => Pause(setTitleState, send)}
          style={{ backgroundColor: "#fdaaaa" }}
        >
          👅❌
        </button>
      </div>
    </div>
  );
}

export default App;
