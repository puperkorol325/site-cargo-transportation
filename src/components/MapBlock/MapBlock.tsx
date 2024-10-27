import React from "react";
import styles from "./MapBlock.module.css";
import { CustomizedButton, CustomizedButton2 } from "../CustomizedButton/CustomizedButton";

export const MapBlock:React.FC<{}> = () => {

    return (
        <div className={styles.mapBlock}>
            <iframe className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A1441c2f398792d280f1ebb151748958f71588d8a6c96bba39036d405d3d7be00&amp;source=constructor" width="50%" height="100%"></iframe>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <h1>БАСТИОН, г. Москва</h1>
                    <CustomizedButton2 className={styles.leaveTicketButton}>Оставить заявку</CustomizedButton2>
                    <p className={styles.address}>Офис продаж: 127055, г. Москва, ул. Сущевская, дом 12, стр.1</p>
                    <p className={styles.address}>Адрес автостоянки: 141580, МО, г.о. Химки, деревня Дубровки, тер. Индустриальный парк Шерризон-Норд, стр. 5/1</p>
                    <div className={styles.contactsContainer}>
                        <h2>Тел.: 8(916) 031 25-99</h2>
                        <h2>E-mail: andrey@bastionavto.ru</h2>
                        <h2>Telegram: -</h2>
                        <h2>WhatsApp: 8(916) 031 25-99</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}