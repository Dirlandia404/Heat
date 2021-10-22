import { VscGithubInverted } from "react-icons/vsc";
import styles from "./styles.module.scss";

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${}&redirect_url=http://localhost:3000`
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        entre com o github
      </a>
    </div>
  );
}
