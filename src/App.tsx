import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Gif, GIF_ID, PAUSED_CLASS, PLAYING_CLASS } from './gif/gif.component';

const PLAYING_TITLE = "slurp, slurp"
const PAUSED_TITLE = "go ahead, take a sip"

function Pause(setTitleState:React.Dispatch<React.SetStateAction<string>>){
  const gifElement = document.getElementById(GIF_ID)
  if(gifElement){
    gifElement.classList.remove(PLAYING_CLASS);
    gifElement.classList.add(PAUSED_CLASS);
    setTitleState(PAUSED_TITLE)
  }
  else{
    console.error(`Unable to find an element with ${GIF_ID}`)
  }
}

function Play(setTitleState:React.Dispatch<React.SetStateAction<string>>){
  const gifElement = document.getElementById(GIF_ID)
  if(gifElement){
    gifElement.classList.remove(PAUSED_CLASS);
    gifElement.classList.add(PLAYING_CLASS);
    setTitleState(PLAYING_TITLE)
  }
  else{
    console.error(`Unable to find an element with ID: ${GIF_ID}`)
  }
}

function App() {
  const [titleState, setTitleState] = useState(PAUSED_TITLE)
  return (
    <div className="App">
      <div id='center-div'>
        <p id='title'>{titleState}</p>
        <Gif/>
        <button onClick={() => Play(setTitleState)} style={{backgroundColor: '#73B2D9'}}>👅💧</button>
        <button onClick={() => Pause(setTitleState)} style={{backgroundColor: '#fdaaaa'}}>👅❌</button>
      </div>
    </div>
  );
}

export default App;
