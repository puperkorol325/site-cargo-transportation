import React from "react";
import { Menu } from "../Menu/Menu";
import styles from "./Header.module.css";
import { CustomizedButton } from "../CustomizedButton/CustomizedButton";

export const Header:React.FC<{}> = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <Menu/>
                <div className={styles.mainInfo}>
                    <h1 className={styles.title}>ПЕРЕВОЗКА САМОСВАЛАМИ И ТОНАРАМИ</h1>
                    <h2 className={styles.description}>Располагаем собственным автопарком, в состав которого входят новые седельные тягачи Scania и самосвальные полуприцепы Wielton</h2>
                    <CustomizedButton className={styles.aboutUsButton}>О компании</CustomizedButton>
                </div>
            </div>
        </div>
    )
}