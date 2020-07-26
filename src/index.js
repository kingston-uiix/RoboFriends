import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div style = {{textAlign:'center'}} >
      <h1 style={{fontFamily:'Roshi', fontSize:'4em', 
      background: '-webkit-linear-gradient(#ff4800, #1c9abe)',webkitBackgroundClip:'text',
      webkitTextFillColor: 'transparent'}}>Robo Friends</h1>
      
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
