import React from "react";
import styles from "./TextBlock.module.css";

type TextBlock = {
    title: string,
    text: any[],
    imagePath: string
}

export const TextBlock:React.FC<TextBlock> = ({ title, text, imagePath}) => {
    return (
        <div className={styles.textBlock}>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.article}>
                    {text.map((item) => (
                        !Array.isArray(item) ? (<p className={styles.text}>{item}</p>) : (<ul className={styles.list}>{item.map((i) => (
                            <li className={styles.listItem}>{i}</li>
                        ))}</ul>)
                    ))}
                </div>
            </div>
            <div className={styles.img} style={{
                backgroundImage: `url('${imagePath}')`,
                
            }}></div>
        </div>
    )
}