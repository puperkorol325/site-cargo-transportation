import React from "react";
import styles from "./Menu.module.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AboutUs } from "../../pages/AboutUs";
import Homepage from "../../pages/Homepage";

type MenuProps = {
  onOpenTicketForm: () => void;
};

export const Menu: React.FC<MenuProps> = ({ onOpenTicketForm }) => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarTop}>
        <Link to={"/"} className={styles.logo}>
          <img
            src={require("../../img/logo.png")}
            alt="Логотип"
            onClick={() => (document.location = "")}
          />
        </Link>
        <div className={styles.additionalInfo}>
          <div className={styles.phoneNumberContainer}>
            <h1 className={styles.phoneNumber}>8 (916) 031 25-99</h1>
            <h1
              className={styles.email}
              onClick={() =>
                (document.location = "mailto:vantsyan2024@mail.ru")
              }
            >
              vantsyan2024@mail.ru
            </h1>
          </div>
          <div className={styles.leaveTicketContainer}>
            <CustomizedButton
              className={styles.leaveTicketButton}
              onClick={onOpenTicketForm}
            >
              Оставить заявку
            </CustomizedButton>
          </div>
        </div>
      </div>
      <div className={styles.NavbarBottom}>
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
      </div>
    </div>
  );
};
