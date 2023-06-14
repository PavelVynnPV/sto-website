import React, { useState, useEffect } from "react";

const ReplyForm = ({ commentId, setComments }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;
  
    setDay(formattedDate);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/comments/${commentId}/replies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author, content, day }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Обновление списка комментариев
        setComments(data.comment.replies);
        // Сброс полей формы
        setAuthor("");
        setContent("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Автор:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Содержание:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <button type="submit">Отправить ответ</button>{" "}
    </form>
  );
};

export default ReplyForm;
