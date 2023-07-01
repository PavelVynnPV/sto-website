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
                <li>Автодіагностика</li>
              </Link>
              <Link to="/hodovaya">
                <li>Ремонт ходової</li>
              </Link>
              <Link to="/otherservices">
                <li>Інші послуги автосервісу</li>
              </Link>
              <Link to="/autoconditioner">
                <li>Автокондиціонер</li>
              </Link>{" "}
              <Link to="/tirefitting">
                <li>Шиномонтаж</li>
              </Link>
              <Link to="/rozval">
                <li>Розвал-сходження 3D</li>
              </Link>
              <Link to="/tehfluids">
                <li>Заміна технічних рідин та фільтрів</li>
              </Link>
              <Link to="/braksystem">
                <li>Гальмівна система</li>
              </Link>
              <Link to="/steering">
                <li>Рульове управління</li>
              </Link>
              <Link to="/cooling_system">
                <li>Система охолодження</li>
              </Link>
              <Link to="/replacement_belts">
                <li>Заміна ременів та ланцюга приводу ГРМ</li>
              </Link>
              <Link to="/clutch">
                <li>Система зчеплення</li>
              </Link>
              <Link to="/injection">
                <li>Діагностика інжектора</li>
              </Link>
              <Link to="/ignition">
                <li>Система запалювання</li>
              </Link>
              <Link to="/radiator">
                <li>Промивка радіатора пічки</li>
              </Link>
              <Link to="/svarka">
                <li>Зварювальні та слюсарні роботи</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.first_links_block}>
          <div className={styles.links_block}>
            <div>
              <h1 className={styles.links__title}>АДРЕСА</h1>
              <ul className={styles.menu__block}>
                <li>м.Київ пр.Відрадний, 95</li>
              </ul>
            </div>
            <div>
              <h1 className={styles.links__title}>ГРАФІК РОБОТИ</h1>
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
