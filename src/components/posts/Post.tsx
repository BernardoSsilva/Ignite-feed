import {
    useState
} from "react";
import { Avatar } from "../avatar/avatar";
import { Comment } from "../comment/Comment";
import styles from "./Post.module.css";

export function Post({
  author = { avatarUrl: "", name: "", role: "" },
  content = [
    {
      type: "",
      content: "",
    },
  ] || [],

  date = new Date(),
}) {
  const publishedDateFormat = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  const [newCommentText, setNewCommentText] = useState("");
  const [comments, setComments] = useState(["Muito Bacana"]);
  function handleCreateNewComment() {
    event?.preventDefault();

    if (newCommentText == " ") {
      console.log("comentário vazio");
    }
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.user}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.userInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="28 de fevereiro as 5:30" dateTime="2024-02-28 05:30:15">
          {publishedDateFormat}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((field) => {
          if (field.type == "paragraph") return <p>{field.content}</p>;
          if (field.type == "link") return <a href="#">{field.content}</a>;
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        action=""
        className={styles.commentForm}
      >
        <strong>Deixe o seu comentário</strong>
        <textarea
          value={newCommentText}
          name="commentContent"
          onChange={(e) => setNewCommentText(e.target.value)}
        ></textarea>
        <footer>
          <button type="submit">Enviar comentário</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment  content={comment} date={new Date()} />;
        })}
      </div>
    </article>
  );
}
