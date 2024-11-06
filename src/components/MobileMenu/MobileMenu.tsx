import React, { useState } from "react";
import styles from "./MobileMenu.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  onOpenTicketForm: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ onOpenTicketForm }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const body = document.getElementsByTagName("body")[0];

  if (isMenuOpened) {
    body.classList.add("openedTicketForm");
    body.classList.remove("closedTicketForm");
  } else {
    body.classList.remove("openedTicketForm");
    body.classList.add("closedTicketForm");
  }

  return (
    <>
      <div
        className={[
          styles.MobileMenuContainer,
          isMenuOpened ? styles.menuOpened : styles.menuClosed,
        ].join(" ")}
      >
        <div className={styles.Menu}>
          <Link to="/" className={styles.logo}>
            <img src={require("../../img/logo.png")} alt="" />
          </Link>
          {!isMenuOpened && (
            <img
              src={require("../../img/Hamburger_icon.png")}
              className={styles.hamburgerIcon}
              alt=""
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            />
          )}
          {isMenuOpened && (
            <img
              src={require("../../img/cross.png")}
              className={styles.hamburgerIcon}
              alt=""
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            />
          )}
        </div>
        {isMenuOpened && (
          <div className={styles.innerMenu}>
            <div className={styles.nav}>
              <Link to="/about">
                <span className={styles.NavItem}>О компании</span>
              </Link>
              <Link to="/advantages">
                <span className={styles.NavItem}>Преимущества</span>
              </Link>
              <Link to="/services">
                <span className={styles.NavItem}>Наши услуги</span>
              </Link>
              <Link to="/reviews">
                <span className={styles.NavItem}>Отзывы</span>
              </Link>
              <Link to="/contacts">
                <span className={styles.NavItem}>Связь</span>
              </Link>
            </div>
            <h2 className={styles.phoneNumber}>8 (916) 031 25-99</h2>
            <CustomizedButton
              className={styles.leaveTicketButton}
              onClick={onOpenTicketForm}
            >
              Оставить заявку
            </CustomizedButton>
          </div>
        )}
      </div>
    </>
  );
};
