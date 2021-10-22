import { VscGithubInverted } from "react-icons/vsc";
import styles from "./styles.module.scss";

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Edineia</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        entre com o github
      </a>
    </div>
  );
}
