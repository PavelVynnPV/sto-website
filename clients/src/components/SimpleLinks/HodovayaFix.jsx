import React from "react";
import styles from "../styles/Main.module.css";
import { hodova, braking_system } from "./helper";
import ServiceComponent from "./ServiceComponent";

const Hodovaya = () => {
  return (
    <section className={styles.service__block}>
      <div className={styles.service__content}>
        <div className={styles.hodovaya__banner}>
          <h1 className={styles.service__banner_title}>
            Послуги з ремонту ходової
          </h1>
        </div>
        <div className={styles.service__info}>
          <h2 className={styles.service__title}>Ходова частина</h2>
          {/* <p className={styles.service__text}></p>
          Наша компанія спеціалізується на ремонті ходової частини автомобіля,
          що включає в себе компоненти, які відповідають за стійкість,
          керованість і комфорт під час руху. Наші кваліфіковані механіки
          здійснюють комплексну перевірку та діагностику ходової частини для
          виявлення можливих проблем, таких як знос, пошкодження або
          несправність компонентів.
          <br />
          <br />
          Ми займаємося ремонтом рульової системи, підвіски, амортизаторів,
          пружин, стійок, тормозної системи та інших складових ходової частини.
          Ми використовуємо високоякісні запасні частини та сучасне обладнання,
          щоб забезпечити надійність та оптимальну роботу ходової частини.
          <br />
          <br />
          Після діагностики ми надаємо вам докладний звіт про стан ходової
          частини, рекомендації щодо необхідних ремонтних робіт та запасних
          частин. Наші експерти виконають ремонт з високою професіоналізмом та
          уважністю до деталей, забезпечуючи безпеку та комфорт під час
          керування автомобілем.
          <br />
          <br />
          Звертайтеся до нас для професійного ремонту ходової частини вашого
          автомобіля. Ми зробимо все необхідне, щоб відновити оптимальну роботу
          ходової частини і забезпечити безпеку та комфорт під час їзди. */}
          <ServiceComponent service={hodova} />
        </div>
      </div>
    </section>
  );
};

export default Hodovaya;
