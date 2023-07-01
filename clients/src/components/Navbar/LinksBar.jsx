import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const LinksBar = ({ href, setWindowLocHref, windowLocHref, setLoc}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const [windowHref, setWindowHref] = useState("Головна");
  const location = useLocation();
  let paths = location.pathname.split("/").filter((path) => path !== "");

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
    setLoc(location)
  }, [href, setLoc, location]);

  useEffect(() => {
    let window_location = "";

    const windowHrefChanger = () => {
      if (paths[0] === "comments") {
        window_location = "Відгуки";
      } else if (paths[0] === "contacts") {
        window_location = "Контакти";
      } else if (paths[0] === "autodiagnostic") {
        window_location = "Автодіагностика";
      } else if (paths[0] === "tehservice") {
        window_location = "Технічне обслуговування";
      } else if (paths[0] === "electric") {
        window_location = "Автоелектрика";
      } else if (paths[0] === "hodovaya") {
        window_location = "Ремонт ходової";
      } else if (paths[0] === "otherservices") {
        window_location = "Інші послуги автосервісу";
      } else if (paths[0] === "autoconditioner") {
        window_location = "Автокондиціонер";
      } else if (paths[0] === "tirefitting") {
        window_location = "Шиномонтаж";
      } else if (paths[0] === "rozval") {
        window_location = "Розвал-сходження 3D";
      } else if (paths[0] === "engine") {
        window_location = "Ремон та обслуговування двигуна";
      } else if (paths[0] === "tehfluids") {
        window_location = "Заміна технічних рідин та фільтрів";
      } else if (paths[0] === "braksystem") {
        window_location = "Гальмівна система";
      } else if (paths[0] === "steering") {
        window_location = "Рульове управління";
      } else if (paths[0] === "cooling_system") {
        window_location = "Система охолодження";
      } else if (paths[0] === "replacement_belts") {
        window_location = "Заміна ременів та ланцюга приводу ГРМ";
      } else if (paths[0] === "clutch") {
        window_location = "Система зчеплення";
      } else if (paths[0] === "injection") {
        window_location = "Діагностика інжектора";
      } else if (paths[0] === "ignition") {
        window_location = "Система запалювання";
      } else if (paths[0] === "radiator") {
        window_location = "Промивка радіатора пічки";
      } else if (paths[0] === "allservices") {
        window_location = "Усі послуги";
      } else if (paths[0] === "svarka") {
        window_location = "Зварювальні та слюсарні роботи";
      } else {
        window_location = "";
      }
    };

    windowHrefChanger();
    setWindowLocHref(window_location);
  }, [paths, setWindowLocHref]);

  return (
    <>
      <nav>
        <div
          className={
            openBurgerMenu ? styles.nav_burger_content : styles.nav__content
          }
        >
          <Link to="/sto-website" onClick={() => {setOpenMenu(false); setOpenBurgerMenu(false)}}>
            Головна
          </Link>
          <div className={styles.burger__block}>
            <Link className={styles.nav__menu} onClick={handleOpenMenu}>
              <div className={styles.links__menu_text}>
                <span>Послуги</span>{" "}
                <span className={styles.arrow_down_icon}></span>
              </div>
            </Link>
            {openMenu ? (
              <>
                <ul className={styles.active__menu}>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/autodiagnostic"
                  >
                    <li>Автодіагностика</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/hodovaya"
                  >
                    <li>Ремонт ходової</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/otherservices"
                  >
                    <li>Інші послуги автосервісу</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/autoconditioner"
                  >
                    <li>Автокондиціонер</li>
                  </Link>{" "}
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/tirefitting"
                  >
                    <li>Шиномонтаж</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/rozval"
                  >
                    <li>Розвал-сходження 3D</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/engine"
                  >
                    <li>Ремон та обслуговування двигуна</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/tehfluids"
                  >
                    <li>Заміна технічних рідин та фільтрів</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/braksystem"
                  >
                    <li>Гальмівна система</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/steering"
                  >
                    <li>Рульове управління</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/cooling_system"
                  >
                    <li>Система охолодження</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/replacement_belts"
                  >
                    <li>Заміна ременів та ланцюга приводу ГРМ</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/clutch"
                  >
                    <li>Система зчеплення</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/injection"
                  >
                    <li>Чистка форсунок (інжектора)</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/ignition"
                  >
                    <li>Система запалювання</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/radiator"
                  >
                    <li>Промивка радіатора пічки</li>
                  </Link>
                  <Link
                    onClick={() => {
                      setOpenMenu(false);
                      setOpenBurgerMenu(false);
                    }}
                    to="/svarka"
                  >
                    <li>Зварювальні та слюсарні роботи</li>
                  </Link>
                </ul>
              </>
            ) : null}
          </div>

          <Link
            to="/comments"
            onClick={() => {
              setOpenMenu(false);
              setOpenBurgerMenu(false);
            }}
          >
            Відгуки
          </Link>
          <Link
            to="/contacts"
            onClick={() => {
              setOpenMenu(false);
              setOpenBurgerMenu(false);
            }}
          >
            Контакти
          </Link>
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
        <p>
          {windowHref} {paths?.length !== 0 ? ">" : null} {windowLocHref}
        </p>
      </section>
    </>
  );
};

export default LinksBar;
