import React, { useState, useEffect } from "react";
import styles from "../styles/Comment.module.css";

const ReplyForm = ({ commentId, setComments }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    setDay(formattedDate);
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    const verifyEmail = () => {
      // Regular expression pattern for email validation
      const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  
      // Use the pattern to match the email address
      if (pattern.test(email)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };
  
    verifyEmail();
  }, [email])

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://sto-web-pv.onrender.com/comments/${commentId}/replies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, content, day, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Обновление списка комментариев
        setComments(data.comment.replies);
        // Сброс полей формы
        setAuthor("");
        setContent("");
        setEmail("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.reply__form}>
      <div className={styles.form__inputs}>
        <label htmlFor="author">Ім'я:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
      </div>
      <div className={styles.form__inputs}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            handleEmailChange(event);
          }}
          required
        />
        {!isValid ? (
          <p className={email.length > 1 ? styles.red_error : styles.unActive}>
            Email введений невірно*
          </p>
        ) : null}
      </div>
      <div className={styles.form__inputs}>
        <label htmlFor="content">Коментар:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
        ></textarea>
      </div>
      <button className={styles.form__button} type="submit" disabled={!isValid}>
        Відповісти
      </button>{" "}
    </form>
  );
};

export default ReplyForm;
