import { VscGithubInverted } from "react-icons/vsc";
import styles from "./styles.module.scss";

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=6294ab292a7129034ee9&redirect_url=http://localhost:3000`;
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
