import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer:React.FC<{}> = () => {
    
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footnav}>
                    <Link to='/about'><span className={styles.NavItem}>О компании</span></Link>
                    <Link to='/advantages'><span className={styles.NavItem}>Преимущества</span></Link>
                    <Link to='/services'><span className={styles.NavItem}>Наши услуги</span></Link>
                    <Link to='/reviews'><span className={styles.NavItem}>Отзывы</span></Link>
                    <Link to='/contacts'><span className={styles.NavItem}>Связь</span></Link>
                </div>
                <div className={styles.contactsContainer}>
                    <p className={styles.contact}>ООО «Перевозка самосвалы»</p>
                    <p className={styles.contact}>Тел.: 8 (916) 031 25-99 , e-mail: perevozkasamosvaly@gmail.com</p>
                    <p className={styles.contact}>рабочий посёлок Нахабино, городской округ Красногорск, Московская область</p>
                </div>
            </div>
        </div>
    )
}