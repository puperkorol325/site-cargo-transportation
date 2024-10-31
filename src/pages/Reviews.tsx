import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';
import reportWebVitals from '../reportWebVitals';
import { TicketForm } from '../components/TicketForm/TicketForm';
import { MainCards } from '../components/MainCards/MainCards';
import { TextBlock } from '../components/TextBlock/TextBlock';
import { MapBlock } from '../components/MapBlock/MapBlock';
import { Footer } from '../components/Footer/Footer';
import Homepage from './Homepage';
import { Header } from '../components/Header/Header';
import { Header2 } from '../components/Header2/Header2';
import tonar from '../img/tonar.jpg';
import { ReviewsBlock } from '../components/ReviewsBlock/ReviewsBlock';

export const Reviews:React.FC<{}> = () => {

    const [isTicketFormOpen, setIsTicketFormOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const advantagesBlock = {
        title: 'Мы предоставляем следующие услуги:',
        text: [['Доставка песка', 'Доставка щебня', 'Доставка торфа', 'Доставка гравия', 'Доставка земли','Доставка крошки', 'Доставка чернозема', 'Доставка грунта', 'Вывоз с объекта', 'Вывоз снега', 'Работа по обьекту экскаватора', 'Работа по обьекту спецтехники']],
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
                <Header2 onOpenTicketForm={handleOpenTicketForm} windowWidth={windowWidth} title='ОТЗЫВЫ'/>
                <ReviewsBlock/>
                <MapBlock onOpenTicketForm={handleOpenTicketForm}/>
                <Footer/>
            </div>
        </>
    );
}

export default Reviews