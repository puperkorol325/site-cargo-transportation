import React from "react";
import styles from "./Footer.module.css";

export const Footer:React.FC<{}> = () => {
    
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footnav}>
                    <span className={styles.NavItem}>О компании</span>
                    <span className={styles.NavItem}>Перевозка</span>
                    <span className={styles.NavItem}>Преимущества</span>
                    <span className={styles.NavItem}>Отзывы</span>
                    <span className={styles.NavItem}>Наши услуги</span>
                    <span className={styles.NavItem}>Связь</span>
                </div>
                <div className={styles.contactsContainer}>
                    <p className={styles.contact}>ООО «Бастион»</p>
                    <p className={styles.contact}>Тел.: 8 (916) 031 25-99 , e-mail: andrey@bastionavto.ru</p>
                    <p className={styles.contact}>141580, г. Москва, МО, Химки, мкр. Подрезково, СТ «Кирилловка»</p>
                </div>
            </div>
        </div>
    )
}