import React from "react";
import styles from "./Menu.module.css"
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CustomizedButton } from '../CustomizedButton/CustomizedButton'


export const Menu:React.FC<{}> = () => {

    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarTop}>
                <img src={require('../../img/logo.jpg')} className={styles.logo} alt="Логотип" onClick={() => document.location=''}/>
                <div className={styles.additionalInfo}>
                    <div className={styles.phoneNumberContainer}>
                        <h1 className={styles.phoneNumber}>8 (916) 031 25-99</h1>
                    </div>
                    <div className={styles.leaveTicketContainer}>
                        <CustomizedButton className={styles.leaveTicketButton}>Оставить заявку</CustomizedButton>
                    </div>
                </div>
            </div>
            <div className={styles.NavbarBottom}>
                <div className={styles.nav}>
                    <span className={styles.NavItem}>О компании</span>
                    <span className={styles.NavItem}>Перевозка</span>
                    <span className={styles.NavItem}>Преимущества</span>
                    <span className={styles.NavItem}>Отзывы</span>
                    <span className={styles.NavItem}>Наши услуги</span>
                    <span className={styles.NavItem}>Связь</span>
                </div>
            </div>
        </div>
    )
}