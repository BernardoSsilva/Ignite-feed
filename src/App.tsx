import { Header } from "./components/header/Header";
import "./global-styles.css";
import styles from "./app.module.css";
import { SideBar } from "./components/sidebar/Sidebar";
import { Post } from "./components/posts/Post";

function App() {
  return (
    <>
      <body>
        <Header />

        <div className={styles.wrapper}>
          <SideBar />
          <main>
            <Post />
          </main>
        </div>
      </body>
    </>
  );
}

export default App;
