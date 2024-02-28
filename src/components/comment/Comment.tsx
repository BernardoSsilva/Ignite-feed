import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../avatar/avatar";
import { useState } from "react";

export function Comment({ content = "", date = new Date(), deleteComment }) {
  const publishedDateFormat = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const [likeCount , setLikeCount] = useState(0)

function handleLikeComment(){
  setLikeCount(likeCount + 1)
}
  function onDeleteComment() {
    deleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Napolinha.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Gustavo Nunes Napoleão</strong>

              <time title={publishedDateFormat}>{publishedDateFormat}</time>
            </div>

            <button title="icon" onClick={onDeleteComment}>
              <Trash size={25} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
