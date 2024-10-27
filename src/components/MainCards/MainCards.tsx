import React from "react";
import styles from "./MainCards.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";

export const MainCards:React.FC<{}> = () => {

    return (
        <div className={styles.cards}>
            <div className={[styles.card, styles.card1Background].join(" ")}>
                <h1 className={styles.title}>Отзывы</h1>
                <CustomizedButton className={styles.moreButton}>Подробнее</CustomizedButton>
            </div>
            <div className={[styles.card, styles.card2Background].join(" ")}>
                <h1 className={styles.title}>Наши услуги</h1>
                <CustomizedButton className={styles.moreButton}>Подробнее</CustomizedButton>
            </div>
            <div className={[styles.card, styles.card3Background].join(" ")}>
                <h1 className={styles.title}>Связь</h1>
                <CustomizedButton className={styles.moreButton}>Подробнее</CustomizedButton>
            </div>
        </div>
    )
}