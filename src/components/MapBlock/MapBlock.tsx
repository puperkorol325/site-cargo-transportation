import React from "react";
import styles from "./MapBlock.module.css";
import {
  CustomizedButton,
  CustomizedButton2,
} from "../CustomizedButton/CustomizedButton";

type MapBlockProps = {
  onOpenTicketForm: () => void;
};

export const MapBlock: React.FC<MapBlockProps> = ({ onOpenTicketForm }) => {
  return (
    <div className={styles.mapBlock}>
      <iframe
        className={styles.map}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A6bc51278022321b6c2e8098b9950071414a6b2b5fde6a34d0abf9952e33b59b7&amp;source=constructor"
      ></iframe>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <h1>Грузоперевозки самосвалами, г. Москва и МО</h1>
          <CustomizedButton2
            className={styles.leaveTicketButton}
            onClick={onOpenTicketForm}
          >
            Оставить заявку
          </CustomizedButton2>
          <p className={styles.address}>
            рабочий посёлок Нахабино, городской округ Красногорск, Московская
            область
          </p>
          <ul className={styles.contactsContainer}>
            <li
              className={styles.contactItem}
              onClick={() => (document.location = "tel:+79160312599")}
            >
              <img src={require("../../img/phone.png")} width={"20px"} alt="" />
              Тел.: 8(916) 031 25-99
            </li>
            <li
              className={styles.contactItem}
              onClick={() =>
                (document.location = "mailto:vantsyan2024@mail.ru")
              }
            >
              <img src={require("../../img/mail.png")} width={"20px"} alt="" />
              E-mail: vantsyan2024@mail.ru
            </li>
            <li className={styles.contactItem}>
              <a
                target="_blank"
                className={styles.link}
                href="tg://resolve?domain=89160312599"
              >
                <img src={require("../../img/tg.png")} width={"20px"} alt="" />
                Telegram: 8(916) 031 25-99
              </a>
            </li>
            <li className={styles.contactItem}>
              <a
                target="_blank"
                className={styles.link}
                href="https://wa.me/+79160312599"
              >
                <img
                  src={require("../../img/whatsapp.png")}
                  width={"20px"}
                  alt=""
                />
                WhatsApp: 8(916) 031 25-99
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
