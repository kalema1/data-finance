import styles from "./TipsTricks.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function TipsTricks() {
  return (
    <section className={styles.tipsTricksSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h2 className={styles.heading}>
              Want tips & tricks to optimize your flow?
            </h2>
            <p className={styles.para}>
              Sign up to our newsletter and stay up to date
            </p>
          </div>
          <div className={styles.gridItem}>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter Your email"
              />
              <Button type="primary">Notify me</Button>
            </form>
            <p className={styles.formPara1}>
              We care about the protection of your data. Read our
            </p>
            <Link className={styles.formPara2}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
