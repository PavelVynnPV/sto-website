import React, { useEffect, useState, useMemo } from "react";
import ReplyForm from "./ReplyForm";
import styles from "../styles/Comment.module.css";
import Pagination from "../Pagination/Pagination";

let PageSize = 6;

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openReplies, setOpenReplies] = useState({});

  useEffect(() => {
    fetch("https://sto-web-pv.onrender.com/comments")
      .then((response) => response.json())
      .then((data) => {setComments(data) ; console.log(data)})
      .catch((error) => console.error(error));
  }, []);

  console.log(comments)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, comments]);

  const toggleReply = (commentId) => {
    setOpenReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <section className={styles.feedback}>
      <div className={styles.feedback__container}>
        <Pagination
          className={styles.pagination_bar}
          currentPage={currentPage}
          totalCount={comments.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <h2 className={styles.feedback__title}>Відгуки</h2>
        {currentTableData.map((comment) => (
          <div key={comment._id} className={styles.comment__block}>
            <div className={styles.feedback__name_rate_date}>
              <div className={styles.feedback__name_rate}>
                <p>{comment.author}</p>
                <div
                  className={
                    comment.starRate === "1"
                      ? styles.rating_stars_first
                      : comment.starRate === "2"
                      ? styles.rating_stars_second
                      : comment.starRate === "3"
                      ? styles.rating_stars_third
                      : comment.starRate === "4"
                      ? styles.rating_stars_fourth
                      : comment.starRate === "5"
                      ? styles.rating_stars_fifth
                      : styles.rating_stars
                  }
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <span className={styles.feedback__date}>{comment.day}</span>
            </div>
            <p>{comment.content}</p>
            <div className={comment?.replies.length === 0 ? styles.unActive : styles.reply__answers}>
           <h3>Відповіді:</h3>

            {comment.replies?.map((message) => (
              <div className={styles.answer}>
                <p><strong>Ім'я:</strong> {message.author}</p>
                <p><strong>Відповідь на коментар:</strong> {message.content}</p>
              </div>
            ))}
            </div>
             <div
              className={styles.reply}
              onClick={() => {
                toggleReply(comment._id);
              }}
            >
              <span className={styles.reply_button}>
                <span className={styles.arrow__icon}>
                  <i class="fa-solid fa-reply fa-rotate-180"></i>
                </span>
                Відповісти
              </span>
            </div>
            {openReplies[comment._id] && (
              <div className={styles.reply__content}>
                <ReplyForm commentId={comment._id} setComments={setComments} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsList;
