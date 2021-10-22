import { useContext } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import styles from "./styles.module.scss";

export function LoginBox() {
  const {} = useContext(AuthContext);
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        entre com o github
      </a>
    </div>
  );
}
