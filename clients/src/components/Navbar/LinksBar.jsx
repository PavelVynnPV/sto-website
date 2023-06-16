import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const LinksBar = ({ href }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [windowHref, setWindowHref] = useState("Головна");
  const [windowLocHref, setWindowLocHref] = useState("");
  const location = useLocation();
  let paths = location.pathname.split('/').filter((path) => path !== '');

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

  useEffect(() => {
    let window_location = '';

    const windowHrefChanger = () => {
      if (paths[0] === 'comments') {
        window_location = "Відгуки" 
      } else if (paths[0] === 'contacts') {
        window_location = "Контакти" 
      } else if (paths[0] === 'autodiagnostic') {
        window_location = "Автодіагностика" 
      } else if (paths[0] === 'tehservice') {
        window_location = "Технічне обслуговування" 
      } else if (paths[0] === 'electric') {
        window_location = "Автоелектрика" 
      } else if (paths[0] === 'hodovaya') {
        window_location = "Ремонт ходової" 
      } else if (paths[0] === 'otherservices') {
        window_location = "Інші послуги автосервісу" 
      } else {
        window_location = ""
      }
    }
  
    windowHrefChanger()
    setWindowLocHref(window_location)
  }, [paths])
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
                <Link to="/autodiagnostic">
                    <li>Автодіагностика</li>
                  </Link>
                  <Link to="/tehservice">
                    <li>Технічне обслуговування</li>
                  </Link>
                  <Link to="/electric">
                    <li>Автоелектрика</li>
                  </Link>
                  <Link to="/hodovaya">
                    <li>Ремонт ходової</li>
                  </Link>
                  <Link to="/otherservices">
                    <li>Інші послуги автосервісу</li>
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
        <p>{windowHref} {paths?.length !== 0 ? ">" : null} {windowLocHref}</p>
      </section>
    </>
  );
};

export default LinksBar;
