import { Link } from "react-router-dom";
import styles from "./SignInForm.module.css";

export default function SignInForm() {
  return (
    <div className={styles.formBox}>
      <div className={styles.innerBox}>
        <p className={styles.signinPara}>Welcome to React</p>
        <p className={styles.para1}>
          Please sign in into your account and start the adventure
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.formInputBox}>
            <label htmlFor="name" className={styles.label}>
              EMAIL OR USERNAME
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              placeholder="Enter your email or username"
            />
          </div>
          <div className={styles.formInputBox}>
            <label htmlFor="password" className={styles.label}>
              PASSWORD
            </label>
            <input
              className={styles.input}
              id="password"
              type="password"
              placeholder="Enter your username"
            />
          </div>
          <button className={styles.formButton}>Sign In</button>
          <p className={styles.formPara}>
            New on our platform{" "}
            <Link className={styles.formLink}>Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
