import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import { makeServer } from './services/mirage';

if (import.meta.env.DEV === true) {
  makeServer();
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
