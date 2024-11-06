import React from "react";
import styles from "./MainCards.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { Link } from "react-router-dom";

export const MainCards: React.FC<{}> = () => {
  return (
    <div className={styles.cards}>
      <div className={[styles.card, styles.card1Background].join(" ")}>
        <h1 className={styles.title}>Отзывы</h1>
        <Link to="/reviews" className={styles.link}>
          <CustomizedButton className={styles.moreButton}>
            Подробнее
          </CustomizedButton>
        </Link>
      </div>
      <div className={[styles.card, styles.card2Background].join(" ")}>
        <h1 className={styles.title}>Наши услуги</h1>
        <Link to="/services" className={styles.link}>
          <CustomizedButton className={styles.moreButton}>
            Подробнее
          </CustomizedButton>
        </Link>
      </div>
      <div className={[styles.card, styles.card3Background].join(" ")}>
        <h1 className={styles.title}>Связь</h1>
        <Link to="/contacts" className={styles.link}>
          <CustomizedButton className={styles.moreButton}>
            Подробнее
          </CustomizedButton>
        </Link>
      </div>
    </div>
  );
};
