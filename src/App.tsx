import { Header } from "./components/header/Header";
import "./global-styles.css";
import styles from "./app.module.css";
import { SideBar } from "./components/sidebar/Sidebar";
import { Post } from "./components/posts/Post";
import { Target } from "@phosphor-icons/react";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/BernardoSsilva.png",
        name: "Bernardo Santos da silva",
        role: "Full stack developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date(),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/Napolinha.png",
        name: "Luiz Gustavo Napoleão",
        role: "Desenvolvedor desktop",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "👉 jane.design/doctorcare", target: "#" },
      ],
      publishedAt: new Date(),
    },
  ];

  return (
    <>
      <body>
        <Header />

        <div className={styles.wrapper}>
          <SideBar />
          <main>
            {posts.map((post) => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  date={post.publishedAt}
                />
              );
            })}
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
