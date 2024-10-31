import React from "react";
import styles from "./MapBlock.module.css";
import { CustomizedButton, CustomizedButton2 } from "../CustomizedButton/CustomizedButton";

type MapBlockProps = {
    onOpenTicketForm: () => void;
}

export const MapBlock:React.FC<MapBlockProps> = ({ onOpenTicketForm }) => {

    return (
        <div className={styles.mapBlock}>
            <iframe className={styles.map}src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bc51278022321b6c2e8098b9950071414a6b2b5fde6a34d0abf9952e33b59b7&amp;source=constructor"></iframe>
            <div className={styles.infoContainer}>
                <div className={styles.info}>
                    <h1>Грузоперевозки самосвалами, г. Москва и МО</h1>
                    <CustomizedButton2 className={styles.leaveTicketButton} onClick={onOpenTicketForm}>Оставить заявку</CustomizedButton2>
                    <p className={styles.address}>рабочий посёлок Нахабино, городской округ Красногорск, Московская область</p>
                    <div className={styles.contactsContainer}>
                        <h2>Тел.: 8(916) 031 25-99</h2>
                        <h2 className={styles.email} onClick={() => document.location='mailto:perevozkasamosvaly@gmail.com'}>E-mail: perevozkasamosvaly@gmail.com</h2>
                        <h2>Telegram: <a target="_blank" className={styles.link} href="tg://resolve?domain=89160312599">8(916) 031 25-99</a></h2>
                        <h2>WhatsApp: <a target="_blank" className={styles.link} href="https://wa.me/+79160312599">8(916) 031 25-99</a></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}