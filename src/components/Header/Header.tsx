import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { on } from "events";
import { MobileMenu } from "../MobileMenu/MobileMenu";

type HeaderProps = {
    onOpenTicketForm: () => void;
    windowWidth: number
}

export const Header:React.FC<HeaderProps> = ({ onOpenTicketForm, windowWidth }) => {
    return (
        <>
        {windowWidth < 1000 && (<MobileMenu onOpenTicketForm={onOpenTicketForm}/>)}
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                {windowWidth > 1000 && (<Menu onOpenTicketForm={onOpenTicketForm}/>)}
                <div className={styles.mainInfo}>
                    <h1 className={styles.title}>ПЕРЕВОЗКА САМОСВАЛАМИ И ТОНАРАМИ</h1>
                    <h2 className={styles.description}>Мы располагаем собственным автопарком, в который входят новые седельные тягачи Scania и самосвальные полуприцепы Wielton.</h2>
                    <CustomizedButton className={styles.aboutUsButton}>О компании</CustomizedButton>
                </div>
            </div>
        </div>
        </>
    )
}