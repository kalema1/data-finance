import styles from "./Card.module.css";
import Button from "./Button";

const cardNames = [
  {
    category: "Single User",
    amount: "$149",
    storage: "500 GB Storage",
    users: "1 user Allowed",
    packets: "Send up to 2 GB",
    image: "single.png",
    type: "primary",
  },
  {
    category: "Partnership",
    amount: "$199",
    storage: "1 TB Storage",
    users: "3 users Allowed",
    packets: "Send up to 10 GB",
    image: "double.png",
    type: "secondary",
  },
  {
    category: "Group Account",
    amount: "$299",
    storage: "5 TB Storage",
    users: "10 users Allowed",
    packets: "Send up to 20 GB",
    image: "triple.png",
    type: "primary",
  },
];

export default function Card() {
  return (
    <section className={styles.cardSection}>
      <div className="container">
        <div className={styles.cardGrid}>
          {cardNames.map((card) => (
            <CardItem item={card} key={card.amount} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ item }) {
  const partner = item.category === "Partnership" ? styles["partner"] : "";
  return (
    <div
      className={`${styles.outerContainer} ${partner}
      }`}
    >
      <div className={styles.cardContainer}>
        <img className={styles.cardImg} src={item.image} alt={item.category} />
        <h3 className={styles.cardHeading}>{item.category}</h3>
        <p className={styles.cardpara1}>{item.amount}</p>
        <p className={styles.cardpara1}>{item.storage}</p>
        <p className={styles.cardpara1}>{item.users}</p>
        <p className={styles.cardpara1}>{item.packets}</p>
        <div className={styles.btnContainer}>
          <Button type={item.type}>Start Trial</Button>
        </div>
      </div>
    </div>
  );
}
