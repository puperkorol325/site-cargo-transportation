import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import { CardProps } from '@mui/material';
import { MainCards } from './components/MainCards/MainCards';
import { TextBlock } from './components/TextBlock/TextBlock';
import tonar from './img/tonar.jpg';
import { MapBlock } from './components/MapBlock/MapBlock';
import { Footer } from './components/Footer/Footer';
import { TicketForm } from './components/TicketForm/TicketForm';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Advantages from './pages/Advantages';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Reviews from './pages/Reviews';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/advantages" element={<Advantages/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
    </Routes>  
    </>
  );
}

export default App;
