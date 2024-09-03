import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { UserProvider } from './user.context.js';
import { HistoryProvider } from './HistoryContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </UserProvider>
  </React.StrictMode>
);
//reportWebVitals();