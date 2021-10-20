import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './pages/App';
import store from './store';
import { createBrowserHistory } from 'history';

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={createBrowserHistory()} />
  </React.StrictMode>,

  document.getElementById('root'),
);
