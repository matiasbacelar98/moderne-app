import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import EntranceProvider from './context/entranceContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EntranceProvider>
        <App />
      </EntranceProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
