import React, { useState } from "react";
import styles from "./TicketForm.module.css";
import { TextField } from "@mui/material";
import { CustomizedButton2 } from "../CustomizedButton/CustomizedButton";
import { on } from "events";

type TicketFormProps = {
    onCloseTicketForm: () => void;
}


export const TicketForm:React.FC<TicketFormProps> = ({ onCloseTicketForm }) => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [comment,setComment] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('number', number);
        formData.append('comment', comment);

        try {
            const response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            alert(result.message);
            if (response.ok) {
                onCloseTicketForm(); 
            }
        } catch (error) {
            alert("Произошла ошибка отправки! Попробуйте ещё раз.");
            console.error(error);
        }
    };

    return (
        <div className={styles.TicketFormContainer}>
            <img src={require('../../img/cross.png')} className={styles.cross} onClick={onCloseTicketForm} alt="" />
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Оставьте заявку!</h2>
                <form className={styles.form} method="get" id="form" onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        name="name"
                        type="text" 
                        label="Ваше имя" 
                        variant="outlined"
                        value={name}
                        required
                        onChange={(e) => e.target.value.length <= 16 ? setName(e.target.value) : setName(name)}
                        className={styles.textField}
                    />
                    <TextField 
                        id="email" 
                        name="email"
                        type="email" 
                        label="Ваше e-mail" 
                        variant="outlined" 
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.textField}
                    />
                    <TextField 
                        id="number" 
                        name="number"
                        type="tel" 
                        label="Ваш номер телефона" 
                        variant="outlined"
                        value={number}
                        required
                        onChange={(e) => {
                            if ((e.target.value[e.target.value.length-1] === '+' || /^[0-9]$/.test(e.target.value[e.target.value.length-1]) && e.target.value.length <= 13)){
                                setNumber(e.target.value)
                            }
                        }}
                        className={styles.textField}
                    />
                    <TextField
                        id="comment"
                        name="comment"
                        label="Комментарий"
                        multiline
                        maxRows={4}
                        variant="outlined"
                        value={comment}
                        onChange={(e) => e.target.value.length <= 1024 ? setComment(e.target.value) : setComment(comment)}
                        className={styles.comment}
                    />
                    <CustomizedButton2 type="submit" className={styles.submitButton}>Отправить</CustomizedButton2>
                </form>
            </div>
        </div>
    )
}