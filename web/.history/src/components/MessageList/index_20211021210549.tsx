import { useEffect } from "react";
import { api } from "../../services/api";

import styles from "./styles.module.scss";
import LogoImg from "../../assets/logo.svg";

export function MessageList() {
  useEffect(() => {
    api.get("messages/last3").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContest}>
            Não vejo a hora de descobrir onmde está o erro, vai ser show o Do
            while 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Dirlandia404.png" alt="Dirlandia" />
            </div>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContest}>
            Não vejo a hora de descobrir onmde está o erro, vai ser show o Do
            while 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Dirlandia404.png" alt="Dirlandia" />
            </div>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContest}>
            Não vejo a hora de descobrir onmde está o erro, vai ser show o Do
            while 2021
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/Dirlandia404.png" alt="Dirlandia" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
