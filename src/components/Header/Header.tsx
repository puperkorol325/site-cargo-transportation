import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";
import { on } from "events";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { Link } from "react-router-dom";

type HeaderProps = {
  onOpenTicketForm: () => void;
  windowWidth: number;
};

export const Header: React.FC<HeaderProps> = ({
  onOpenTicketForm,
  windowWidth,
}) => {
  return (
    <>
      {windowWidth < 1000 && <MobileMenu onOpenTicketForm={onOpenTicketForm} />}
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          {windowWidth > 1000 && <Menu onOpenTicketForm={onOpenTicketForm} />}
          <div className={styles.mainInfo}>
            <h1 className={styles.title}>ПЕРЕВОЗКА САМОСВАЛАМИ</h1>
            <h2 className={styles.description}>
              Мы осуществляем перевозки по всей Московской области и Москве со
              своим автопарком самосвалов и тонаров
            </h2>
            <Link to="/about">
              <CustomizedButton className={styles.aboutUsButton}>
                О компании
              </CustomizedButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
