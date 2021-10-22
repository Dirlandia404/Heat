import { useEffect, useState } from "react";
import { api } from "../../services/api";

import styles from "./styles.module.scss";
import LogoImg from "../../assets/logo.svg";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>("messages/Last3").then((response) => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <li className={styles.message}>
              <p className={styles.messageContest}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
