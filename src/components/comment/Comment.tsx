import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="http://github.com/BernardoSsilva.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bernardo Santos da Silva</strong>

              <time
                title="28 de fevereiro às 5:30"
                dateTime="2024-02-28 05:30:13"
              >
                {" "}
                Cerca de 5 horas atrás
              </time>
            </div>

            <button title="icon">
              <Trash size={25} />
            </button>
          </header>
          <p>Muito bom, parabéns!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
