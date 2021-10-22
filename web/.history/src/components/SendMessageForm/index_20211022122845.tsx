import { useContext } from "react";
import { VscSignOut } from "react-icons/vsc";
import { AuthContext} from "../../contexts/auth";

import styles from "./styles.module.scss";

export function SendMessageForm() {
  const {user} = useContext{AuthContext}
  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>
      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user.name} />
          
        </div>
      </header>
    </div>
  );
}
