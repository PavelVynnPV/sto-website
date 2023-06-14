import React from "react";
import styles from "../styles/Main.module.css";

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
              Email: :
              <a href="mailto:andrcars.ua@gmail.com">andrcars.ua@gmail.com</a>
            </p>
            <span className={styles.contact__advice}>
              Питання, скарги і пропозиції надсилайте на email{" "}
            </span>
          </div>
          <div className={styles.contacts__map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.1616811428316!2d30.425691999999998!3d50.4194592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c955dc751c8f%3A0x6215c067abe7eebc!2z0J7RgtGA0LDQtNC90YvQuSDQv9GALdGCLiwgOTUsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1686730729672!5m2!1sru!2sua"
              width="540"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="place"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
