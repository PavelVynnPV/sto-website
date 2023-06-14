import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const LinksBar = ({ href }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [windowHref, setWindowHref] = useState("Головна");

  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };
  const handleOpenBurgerMenu = () => {
    if (openBurgerMenu === false) {
      setOpenBurgerMenu(true);
    } else {
      setOpenBurgerMenu(false);
    }
  };

  useEffect(() => {
    if (href === "http://localhost:3000/") {
      setWindowHref("Головна");
    }
  }, [href]);

  return (
    <>
      <nav>
        <div
          className={
            openBurgerMenu ? styles.nav_burger_content : styles.nav__content
          }
        >
          <Link to="/">Головна</Link>
          <Link className={styles.nav__menu} onClick={handleOpenMenu}>
            Послуги<span className={styles.arrow_down_icon}></span>
            {openMenu ? (
              <>
                <ul className={styles.active__menu}>
                  <Link to="/enginefix">
                    <li>Ремонт двигунів</li>
                  </Link>
                  <Link to="/hodovaya">
                    <li>Ремонт ходової</li>
                  </Link>
                  <Link to="/toautofix">
                    <li>ТО автомобіля</li>
                  </Link>
                  <Link to="/electricfix">
                    <li>Автоелектрик</li>
                  </Link>
                  <Link to="/conditionerfix">
                    <li>Автокондиціонер</li>
                  </Link>
                  <Link to="/conditionerusafix">
                    <li>Автокондиціонер США</li>
                  </Link>
                  <Link to="/rozvalfix">
                    <li>Розвал-схождения 3D</li>
                  </Link>
                </ul>
              </>
            ) : null}
          </Link>
          <Link to="/comments">Відгуки</Link>
          <Link to="/contacts">Контакти</Link>
          <div
            className={openBurgerMenu ? styles.close_modal : styles.unActive}
            onClick={handleOpenBurgerMenu}
          >
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={styles.active__mobile_menu}
          onClick={handleOpenBurgerMenu}
        >
          <span className={styles.mobile_burger}></span>
          <span className={styles.mobile_burger}></span>
          <span className={styles.mobile_burger}></span>
        </div>
        <div
          className={openBurgerMenu ? styles.dark_bg_on_open : styles.unActive}
          onClick={handleOpenBurgerMenu}
        ></div>
      </nav>
      <section className={styles.link_view}>
        <p>{windowHref}</p>
      </section>
    </>
  );
};

export default LinksBar;
