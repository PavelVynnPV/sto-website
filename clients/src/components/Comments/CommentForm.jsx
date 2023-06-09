import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import styles from "../styles/Comment.module.css";

const CommentForm = () => {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");
  const [starRate, setStarRate] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let formattedDate;

    if (date.getMonth() + 1 < 10) {
      formattedDate = `${day}.0${month}.${year}`;
    } else if (date.getDate() < 10) {
      formattedDate = `0${day}.${month}.${year}`;
    } else {
      formattedDate = `${day}.${month}.${year}`;
    }

    setDay(formattedDate);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const verifyEmail = () => {
      // Regular expression pattern for email validation
      const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
  
      // Use the pattern to match the email address
      if (pattern.test(email)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };
  
    verifyEmail();
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://sto-web-pv.onrender.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        content,
        day,
        starRate,
        email,
        orderNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Вывод сообщения об успешном создании комментария
        setAuthor("");
        setContent("");
        setEmail("");
        setOrderNumber("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.comment_form}>
      <CommentsList />
      <h2>Залишити відгук</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.rating}>
            <input
              type="radio"
              name="clr1"
              onChange={() => setStarRate(5)}
              style={{ "--c": "#ff9933" }}
            />
            <input
              type="radio"
              name="clr1"
              onChange={() => setStarRate(4)}
              style={{ "--c": "#ff9933" }}
            />
            <input
              type="radio"
              name="clr1"
              onChange={() => setStarRate(3)}
              style={{ "--c": "#ff9933" }}
            />
            <input
              type="radio"
              name="clr1"
              onChange={() => setStarRate(2)}
              style={{ "--c": "#ff9933" }}
            />
            <input
              type="radio"
              name="clr1"
              onChange={() => setStarRate(1)}
              style={{ "--c": "#ff9933" }}
            />
          </div>
        </div>
        <div className={styles.form__inputs}>
          <label>Ім'я:</label>
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>
        <div className={styles.form__inputs}>
          <label>Email (не буде опублікований):</label>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              handleEmailChange(event);
            }}
            className={styles.email_inp}
            required
          />
          {!isValid ? <p className={email.length > 1 ? styles.red_error : styles.unActive}>Email введений невірно*</p> : null}
        </div>
        <div className={styles.form__inputs}>
          <label>Номер замовлення:</label>
          <input
            type="text"
            value={orderNumber}
            onChange={(event) => setOrderNumber(event.target.value)}
            required
          />
        </div>
        <div className={styles.form__inputs}>
          <label>Коментар:</label>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          ></textarea>
        </div>
        <button
          className={styles.form__button}
          type="submit"
        >
          Відправити
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
