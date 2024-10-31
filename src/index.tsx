import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TicketForm } from './components/TicketForm/TicketForm';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementsByClassName('root')[0] as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);