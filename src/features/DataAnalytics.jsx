import Button from "./Button";
import styles from "./DataAnalytics.module.css";

export default function DataAnalytics() {
  return (
    <section className={styles.dataAnalyticsSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src="laptop.jpg" />
          </div>
          <div className={styles.dataAnayticsContainer}>
            <p className={styles.dataAnalytiscPara1}>
              DATA ANALYTICS DASHBOARD
            </p>
            <h2 className={styles.heading}>Manage Data Analytics Centrally</h2>
            <p className={styles.dataAnalytiscPara2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              porro consequuntur deleniti reprehenderit aliquam, corporis
              placeat illo voluptate unde quas vero labore non fuga aut
              laboriosam quia saepe molestiae cupiditate?
            </p>
            <Button type="secondary">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
