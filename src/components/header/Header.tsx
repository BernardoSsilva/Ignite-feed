import styles from "./header.module.css";
import ignitelogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.textContainer}>
          <img src={ignitelogo} alt="logotipo do ignite" />
          <strong>Ignite Feed</strong>
        </div>
        
      </header>
    </>
  );
}
