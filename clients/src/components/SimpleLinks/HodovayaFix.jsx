import React from "react";
import styles from "../styles/Main.module.css";
import { hodova, braking_system } from "./helper";
import ServiceComponent from "./ServiceComponent";

const Hodovaya = () => {
  return (
    <section className={styles.hodovaya__block}>
      <div className={styles.service__content}>
        <div className={styles.hodovaya__banner}>
          <h1 className={styles.service__banner_title}>
            Послуги з ремонту ходової
          </h1>
        </div>
        <div className={styles.service__info}>
          <h2 className={styles.service__title}>Ходова частина</h2>
          <p className={styles.service__text}></p>
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
          ходової частини і забезпечити безпеку та комфорт під час їзди.
          <ServiceComponent service={hodova} />
          <h2 className={styles.service__title}>Гальмівна система</h2>
          <p className={styles.service__text}>
            Наша компанія пропонує послугу ремонту гальмівної системи, яка
            відіграє найважливішу роль у забезпеченні безпеки на дорозі. Наші
            кваліфіковані механіки проводять комплексну перевірку гальмівної
            системи для виявлення потенційних проблем, таких як знос гальмівних
            колодок, пошкодження гальмівних дисків, проблеми з гальмівними
            шлангами або сполуками.
            <br />
            <br />
            Ми використовуємо високоякісні запасні частини та сучасне обладнання
            для здійснення ремонту гальмівної системи. Наші експерти усувають
            проблеми, проводять заміну гальмівних колодок, дисків, тормозних
            циліндрів, регулюють гальмівний баланс та здійснюють всі необхідні
            налаштування.
            <br />
            <br />
            Ми рекомендуємо регулярну перевірку та обслуговування гальмівної
            системи для забезпечення її оптимальної роботи і надійності. Важливо
            вчасно виявляти і виправляти будь-які проблеми, що можуть впливати
            на ефективність гальмування та безпеку під час руху.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту гальмівної системи
            вашого автомобіля. Наші експерти забезпечать надійну роботу гальмів
            та забезпечать вашу безпеку на дорозі.
          </p>
          <ServiceComponent service={braking_system} />
          <p className={styles.service__text}></p>
        </div>
      </div>
    </section>
  );
};

export default Hodovaya;
