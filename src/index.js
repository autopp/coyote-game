import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let playerID="";
let gameID="default";

window.location.search.substring(1).split('&').forEach((kv) => {
  let [k, v] = kv.split('=');
  if (k === "playerID") {
    playerID = v;
  }
  if (k === "gameID") {
    gameID = v;
  }
});

ReactDOM.render(<App gameID={gameID} playerID={playerID} />, document.getElementById('root'));
registerServiceWorker();
