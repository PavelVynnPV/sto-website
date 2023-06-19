import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className={styles.header__content}>
        <Link to="/sto-website" className={styles.header__img_logo}>
          <span className={styles.header__img_logo_span}></span>
        </Link>
        <div className={styles.header__phone_content}>
          <span className={styles.phone_icon}></span>
          <a href="tel:+380678001500" className={styles.header__phone}>
            (067) 800-15-00
          </a>
        </div>
        <div className={styles.header__map_adress}>
          <span className={styles.mark_icon}></span>
          <span>м.Київ</span>
          <span>пр.Відрадний, 95</span>
        </div>
        <div className={styles.header__schedule_content}>
          <p className={styles.header__schedule}>
            пн.-сб. 09:00-18:00<span>нд. вихідний</span>
          </p>
          <span className={styles.header__cards}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
