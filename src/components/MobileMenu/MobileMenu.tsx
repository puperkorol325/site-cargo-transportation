import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";

type MobileMenuProps = {
    onOpenTicketForm: () => void;
}

export const MobileMenu:React.FC<MobileMenuProps> = ({ onOpenTicketForm }) => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const body = document.getElementsByTagName('body')[0];

    if (isMenuOpened){
        body.classList.add('openedTicketForm');
        body.classList.remove('closedTicketForm');
    }else{
        body.classList.remove('openedTicketForm');
        body.classList.add('closedTicketForm');
    }

    return (
        <>
            <div className={[styles.MobileMenuContainer, isMenuOpened ? styles.menuOpened : styles.menuClosed].join(" ")}>
                <div className={styles.Menu}>
                    <img src={require('../../img/logo.png')} className={styles.logo} alt=""/>
                    {!isMenuOpened && 
                        (<img src={require('../../img/Hamburger_icon.png')} className={styles.hamburgerIcon} alt="" onClick={() => setIsMenuOpened(!isMenuOpened)}/>
                    )}
                    {isMenuOpened && 
                        (<img src={require('../../img/cross.png')} className={styles.hamburgerIcon} alt="" onClick={() => setIsMenuOpened(!isMenuOpened)}/>
                    )}
                </div>
                {isMenuOpened && 
                (<div className={styles.innerMenu}>
                    <div className={styles.nav}>
                        <span className={styles.NavItem}>О компании</span>
                        <span className={styles.NavItem}>Перевозка</span>
                        <span className={styles.NavItem}>Преимущества</span>
                        <span className={styles.NavItem}>Отзывы</span>
                        <span className={styles.NavItem}>Наши услуги</span>
                        <span className={styles.NavItem}>Связь</span>
                    </div>
                    <h2 className={styles.phoneNumber}>8 (916) 031 25-99</h2>
                    <CustomizedButton className={styles.leaveTicketButton} onClick={onOpenTicketForm}>Оставить заявку</CustomizedButton>
                </div>)}
            </div>
        </>
    )
} 