import styles from "./styles.module.scss";
import LogoImg from "../../assets/logo.svg";
export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={LogoImg} alt="DoWhile 2021" />
    </div>
  );
}
