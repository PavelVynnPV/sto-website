import React from "react";
import styles from "../styles/Main.module.css";
import logo_map from "../img/logo_upper_map.png"
import map from "../img/map_img.png"

const Contacts = () => {
  return (
    <>
      <section className={styles.contacts}>
        <div className={styles.contacts__container}>
          <div className={styles.contacts__info}>
            <h2 className={styles.engine__title}>Контакти</h2>
            <p className={styles.contacts__adress}>
              Адреса:<span>пр. Відрадний, 95</span>
            </p>
            <p className={styles.contacts__adress}>
              Номер телефона:<a href="tel:+380678001500">(067) 800-15-00</a>
            </p>
            <p className={styles.contacts__adress}>
              Email:
              <a href="mailto:andrcars.ua@gmail.com">andrcars.ua@gmail.com</a>
            </p>
            <span className={styles.contact__advice}>
              Питання, скарги і пропозиції надсилайте на email{" "}
            </span>
          </div>
          <div className={styles.contacts__map}>
           <img src={logo_map} alt="logo_map" />
           <img src={map} alt="map" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
