import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TicketForm } from './components/TicketForm/TicketForm';

const root = ReactDOM.createRoot(
  document.getElementsByClassName('root')[0] as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);