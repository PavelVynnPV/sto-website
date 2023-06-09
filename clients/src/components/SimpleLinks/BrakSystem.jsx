import React from "react";
import styles from "../styles/Main.module.css";
import ServiceComponent from "./ServiceComponent";
import { braking_system } from "./helper";

const BrakSystem = () => {
  return (
    <>
      <section className={styles.service__block}>
        <div className={styles.service__content}>
          <div className={styles.break__banner}>
            <h1 className={styles.service__banner_title}>Гальмівна система</h1>
          </div>
          <div className={styles.service__info}>
            <h2 className={styles.service__title}>Гальмівна система</h2>
            {/* <p className={styles.service__text}>
              Наша компанія пропонує послугу ремонту гальмівної системи, яка
              відіграє найважливішу роль у забезпеченні безпеки на дорозі. Наші
              кваліфіковані механіки проводять комплексну перевірку гальмівної
              системи для виявлення потенційних проблем, таких як знос
              гальмівних колодок, пошкодження гальмівних дисків, проблеми з
              гальмівними шлангами або сполуками.
              <br />
              <br />
              Ми використовуємо високоякісні запасні частини та сучасне
              обладнання для здійснення ремонту гальмівної системи. Наші
              експерти усувають проблеми, проводять заміну гальмівних колодок,
              дисків, тормозних циліндрів, регулюють гальмівний баланс та
              здійснюють всі необхідні налаштування.
              <br />
              <br />
              Ми рекомендуємо регулярну перевірку та обслуговування гальмівної
              системи для забезпечення її оптимальної роботи і надійності.
              Важливо вчасно виявляти і виправляти будь-які проблеми, що можуть
              впливати на ефективність гальмування та безпеку під час руху.
              <br />
              <br />
              Звертайтеся до нас для професійного ремонту гальмівної системи
              вашого автомобіля. Наші експерти забезпечать надійну роботу
              гальмів та забезпечать вашу безпеку на дорозі.
            </p> */}

            <ServiceComponent service={braking_system} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BrakSystem;
