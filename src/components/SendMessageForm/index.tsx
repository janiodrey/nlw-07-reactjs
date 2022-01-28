import { useContext } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../context/Auth";
import styles from "./styles.module.scss";

export const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>

        <form className={styles.sendMessageForm}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            placeholder="Qual sual expectativa para o evento?"
          />
          <button type="submit">Enviar mensagem</button>
        </form>
      </header>
    </div>
  );
};
