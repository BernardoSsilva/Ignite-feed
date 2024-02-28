import { Header } from "./components/header/Header";
import "./global-styles.css";
import styles from "./app.module.css";
import { SideBar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <body>
        <Header />

        <div className={styles.wrapper}>
          <SideBar />
          <main></main>
        </div>
      </body>
    </>
  );
}

export default App;
