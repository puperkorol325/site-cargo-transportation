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

function App() {

  const [isTicketFormOpen, setIsTicketFormOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const advantagesBlock = {
    title: 'Почему мы лучше?',
    text: [['Гарантия соблюдения сроков поставки', 'Прямые поставки с карьеров и перевалок', 'Работаем напрямую, без посредников', 'Индивидуальный подход к клиентам', 'Юридическая чистота каждой сделки','Только профессиональные водители', 'Круглосуточная перевозка cамосвалами тонарами', 'Собственный автопарк']],
    imagePath: tonar
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleWindowResize);
  
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleOpenTicketForm = () => {
    setIsTicketFormOpen(true);
  }

  const handleCloseTicketForm = () => {
    setIsTicketFormOpen(false);
  }

  let body = document.getElementsByTagName('body')[0];

  if (isTicketFormOpen) {
    body.classList.add('openedTicketForm');
    body.classList.remove('closedTicketForm');
  }

  if (!isTicketFormOpen) {
    body.classList.remove('openedTicketForm');
    body.classList.add('closedTicketForm');
  }

  return (
    <>
      { isTicketFormOpen && (<TicketForm onCloseTicketForm={handleCloseTicketForm}/>)}
      <div className={['container', isTicketFormOpen ? 'containerFiltered' : ''].join(' ')}>
        <Header onOpenTicketForm={handleOpenTicketForm} windowWidth={windowWidth}/>
        <MainCards/>
        <TextBlock title={advantagesBlock.title} text={advantagesBlock.text} imagePath={advantagesBlock.imagePath}/>
        <MapBlock onOpenTicketForm={handleOpenTicketForm}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
