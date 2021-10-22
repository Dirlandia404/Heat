import styles from "./styles.module.scss";
import LogoImg from "../../assets/logo.svg";
export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p>
            Não vejo a hora de descobrir onmde está o erro, vai ser show o Do
            while 2021
          </p>
        </li>
      </ul>
    </div>
  );
}
