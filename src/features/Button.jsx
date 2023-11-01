import styles from "./Button.module.css";
import { Link } from "react-router-dom";
export default function Button({ type, children }) {
  return <Link className={styles[type]}>{children}</Link>;
}
