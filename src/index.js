import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>,
  document.getElementById('root') // id='root' de index.html
);