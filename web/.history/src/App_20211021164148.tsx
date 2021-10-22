import styles from "./App.module.scss";
import { MessageList } from "./components/MessageList";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
    </main>
  );
}
