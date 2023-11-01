import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import React, { useState } from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navBar}>
          <Logo />
          <div
            className={`${styles.navLinks} ${show ? styles["open"] : ""}`}
            /* onMouseOut={() => setShow(!show)} */
            onClick={() => setShow(!show)}
          >
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
            <NavLink className={styles.link} to="/account">
              Account
            </NavLink>
            <NavLink className={styles.link} to="/signin">
              Sign In
            </NavLink>
            <NavLink
              className={`${styles.link} ${styles.getStarted}`}
              to="/getstarted"
            >
              Get Started
            </NavLink>
          </div>
          <div className={styles.iconMenuBox} onClick={() => setShow(!show)}>
            {show ? (
              <HiX className={styles.menu} />
            ) : (
              <HiMenu className={styles.menu} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
