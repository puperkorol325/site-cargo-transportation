import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Header2.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { on } from "events";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

type HeaderProps = {
  onOpenTicketForm: () => void;
  windowWidth: number;
  title: string;
};

export const Header2: React.FC<HeaderProps> = ({
  onOpenTicketForm,
  windowWidth,
  title,
}) => {
  return (
    <>
      {windowWidth < 1000 && <MobileMenu onOpenTicketForm={onOpenTicketForm} />}
      {windowWidth > 1000 && (
        <div className={styles.Navbar}>
          <Link to={"/"} className={styles.logo}>
            <img src={require("../../img/logo2.png")} alt="Логотип" />
          </Link>
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
      )}
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </>
  );
};
