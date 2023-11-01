import styles from "./Footer.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { SiInstagram, SiX, SiGithub, SiFacebook } from "react-icons/si";
import { FiDribbble } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Logo />
            <p className={styles.footerPara1}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              inventore eaque, consequuntur itaque quas aliquam expedita libero.
            </p>
            <div className={styles.footerIconBox}>
              <Link to="https://www.facebook.com" target="_blank">
                <SiFacebook className={styles.icon} />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <SiInstagram className={styles.icon} />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <SiX className={styles.icon} />
              </Link>
              <Link to="https://github.com/" target="_blank">
                <SiGithub className={styles.icon} />
              </Link>
              <Link to="https://dribbble.com/" target="_blank">
                <FiDribbble className={styles.icon} />
              </Link>
            </div>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.footerHeading}>Solutions</p>
            <Link className={styles.footerPara}>Analytics</Link>
            <Link className={styles.footerPara}>Marketing</Link>
            <Link className={styles.footerPara}>Commerce</Link>
            <Link className={styles.footerPara}>Insights</Link>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.footerHeading}>Support</p>
            <Link className={styles.footerPara}>Pricing</Link>
            <Link className={styles.footerPara}>Documentation</Link>
            <Link className={styles.footerPara}>Guides</Link>
            <Link className={styles.footerPara}>API Status</Link>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.footerHeading}>Company</p>
            <Link className={styles.footerPara}>About</Link>
            <Link className={styles.footerPara}>Blog</Link>
            <Link className={styles.footerPara}>Jobs</Link>
            <Link className={styles.footerPara}>Press</Link>
            <Link className={styles.footerPara}>Partners</Link>
          </div>
          <div className={styles.footerDiv}>
            <p className={styles.footerHeading}>Legal</p>
            <Link className={styles.footerPara}>Claim</Link>
            <Link className={styles.footerPara}>Privacy</Link>
            <Link className={styles.footerPara}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
