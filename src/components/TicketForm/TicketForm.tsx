import React, { useState } from "react";
import styles from "./TicketForm.module.css";
import { TextField } from "@mui/material";
import { CustomizedButton2 } from "../CustomizedButton/CustomizedButton";
import { on } from "events";

type TicketFormProps = {
  onCloseTicketForm: () => void;
};

export const TicketForm: React.FC<TicketFormProps> = ({
  onCloseTicketForm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "f774ed51-0b92-4235-a848-b70559f20ec4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      onCloseTicketForm();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div className={styles.TicketFormContainer}>
      <img
        src={require("../../img/cross.png")}
        className={styles.cross}
        onClick={onCloseTicketForm}
        alt=""
      />
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Оставьте заявку!</h2>
        <form className={styles.form} id="form" onSubmit={handleSubmit}>
          <TextField
            id="Имя"
            name="Имя"
            type="text"
            label="Ваше имя"
            variant="outlined"
            value={name}
            required
            onChange={(e) =>
              e.target.value.length <= 16
                ? setName(e.target.value)
                : setName(name)
            }
            className={styles.textField}
          />
          <TextField
            id="Электронная почта"
            name="Электронная почта"
            type="email"
            label="Ваше e-mail"
            variant="outlined"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className={styles.textField}
          />
          <TextField
            id="Номер телефона"
            name="Номер телефона"
            type="tel"
            label="Ваш номер телефона"
            variant="outlined"
            value={number}
            required
            onChange={(e) => {
              if (
                e.target.value[e.target.value.length - 1] === "+" ||
                (/^[0-9]$/.test(e.target.value[e.target.value.length - 1]) &&
                  e.target.value.length <= 13)
              ) {
                setNumber(e.target.value);
              }
            }}
            className={styles.textField}
          />
          <TextField
            id="Комментарий"
            name="Комментарий"
            label="Комментарий"
            multiline
            maxRows={4}
            variant="outlined"
            value={comment}
            onChange={(e) =>
              e.target.value.length <= 1024
                ? setComment(e.target.value)
                : setComment(comment)
            }
            className={styles.comment}
          />
          <CustomizedButton2 type="submit" className={styles.submitButton}>
            Отправить
          </CustomizedButton2>
        </form>
      </div>
    </div>
  );
};
