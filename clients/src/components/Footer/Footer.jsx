import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <div className={styles.first_links_block}>
        <div className={styles.links_block}>
          <h1 className={styles.links__title}>МЕНЮ</h1>
          <ul className={styles.menu__block}>
            <Link to="/sto-website">
              <li>Головна</li>
            </Link>
            <Link to="/comments">
              <li>Відгуки</li>
            </Link>
            <Link to="/contacts">
              <li>Контакти</li>
            </Link>
          </ul>
        </div>
        <div className={styles.links_block}>
          <h1 className={styles.links__title}>ПОСЛУГИ</h1>
          <ul className={styles.menu__block}>
            
          <Link to="/autodiagnostic">
              <li>Автоелектрик</li>
            </Link>
          <Link to="/tehservice">
              <li>Технічне обслуговування</li>
            </Link>
            <Link to="/electric">
              <li>Послуги автоелектрика</li>
            </Link>
            <Link to="/hodovaya">
              <li>Ремонт ходової</li>
            </Link>
            <Link to="/otherservices">
              <li>Інші послуги автосервісу</li>
            </Link>
            
          </ul>
        </div>
        </div>
        <div className={styles.first_links_block}>

        <div className={styles.links_block}>
          <div>
            <h1 className={styles.links__title}>АДРЕС</h1>
            <ul className={styles.menu__block}>
              <li>м.Київ пр.Відрадний, 95</li>
            </ul>
          </div>
          <div>
            <h1 className={styles.links__title}>ГОДИНИ ПРАЦІ</h1>
            <ul className={styles.menu__block}>
              <p>
                пн.-сб. 09:00-18:00
                <br /> нд. вихідний
              </p>
            </ul>
          </div>
        </div>

        <div className={styles.links_block}>
          <h1 className={styles.links__title}>Контакти</h1>
          <ul className={styles.menu__block}>
            <p className={styles.footer_tel}>
              Моб: <a href="tel:+380678001500">(067) 800-15-00</a>
            </p>
            <p className={styles.footer_email}>
              Email:{" "}
              <a href="mailto:andrcars.ua@gmail.com">andrcars.ua@gmail.com</a>
            </p>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
