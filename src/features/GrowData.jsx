import Button from "./Button";
import styles from "./GrowData.module.css";
import Typed from "react-typed";

export default function GrowData() {
  return (
    <section className={styles.growDataSection}>
      <div className="container">
        <div className={styles.heroContainer}>
          <p className={styles.heroPara}>GROWING WITH DATA ANALYTICS</p>
          <h1 className={styles.heroHeading}>Grow with Data</h1>
          <h2 className={styles.heroSubheading}>
            Fast, flexible financing for
            <Typed
              className={styles.typed}
              strings={["D2C", "BTB", "SaSS"]}
              typeSpeed={120}
              loop
            />
          </h2>
          <p className={`${styles.heroPara} ${styles.paraColor}`}>
            Monitor your data analyitics to increase revenue for BTB, BTC, &SASS
            Platforms
          </p>
          <Button type="primary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
