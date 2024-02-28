import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.user}>
          <img
            src="http://github.com/BernardoSsilva.png"
            className={styles.avatar}
            alt=""
          />
          <div className={styles.userInfo}>
            <strong>Bernardo Santos</strong>
            <span>Full stack developer</span>
          </div>
        </div>

        <time title="28 de fevereiro as 5:30" dateTime="2024-02-28 05:30:15">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#"> #nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe o seu comentário</strong>
        <textarea></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
    </article>
  );
}
