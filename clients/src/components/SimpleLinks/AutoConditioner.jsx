import React from "react";
import styles from "../styles/Main.module.css";
import { car_conditioner } from "./helper";
import ServiceComponent from "./ServiceComponent";

const AutoConditioner = () => {
  return (
    <section className={styles.service__block}>
      <div className={styles.service__content}>
        <div className={styles.conditioner__banner}>
          <h1 className={styles.service__banner_title}>
            Обслуговування, заправка та чищення автокондиціонера
          </h1>
        </div>
        <div className={styles.service__info}>
          <h2 className={styles.service__title}>
            Обслуговування автокондиціонера
          </h2>
          {/* <p className={styles.service__text}>
            Наша компанія пропонує послугу обслуговування автокондиціонера, яка
            допоможе вам забезпечити комфортне та приємне відчуття під час
            поїздок. Наші професіонали займаються повним обслуговуванням системи
            кондиціонування повітря, включаючи перевірку тиску, перезаправку
            охолоджувачем, очищення фільтрів, перевірку та ремонт прокладок та
            заміну несправних деталей. Ми використовуємо сучасне обладнання і
            професійні засоби, щоб гарантувати ефективну роботу вашого
            автокондиціонера. <br />
            <br />
            Звертайтеся до нас для забезпечення оптимальної працездатності вашої
            системи кондиціонування і насолоджуйтеся комфортом у вашому
            автомобілі навіть у спекотні дні.
          </p> */}
          <ServiceComponent service={car_conditioner} />
          {/* <p className={styles.service__text}>
            У вашого авто кондиціонера є одне завдання: зробити ваше перебування
            в автомобілі комфортним у спеку. Ваш компресор кондиціонера також
            відповідає за видалення вологи із салону вашого автомобіля, та
            зберігає чистоту вікон при включенні функції «розморожування»?
            <br />
            <br />
            Коли ваша машина була новою, кондиціонер міг охолоджувати авто
            незалежно від того, наскільки спекотно на вулиці. Перебування в
            пробці в спекотний день Києва не могли вас турбувати. Тепер, коли
            минуло кілька років, це може бути негаразд. Згодом кондиціонер у
            вашій машині втрачає здатність охолоджувати так само сильно. Це
            відбувається з низки причин: знос кілець, шлангів і ущільнювачів з
            часом, і навіть поломки самого компресора. У будь-якому випадку,
            через ці проблеми часто відбувається витік холодоагенту, що
            унеможливлює ефективне охолодження салону. Ця рідина кондиціонера
            також становить небезпеку для навколишнього середовища.
          </p> */}

          {/* <h2 className={styles.service__title}>
            ТО автомобільних кондиціонерів у Києві
          </h2>
          <p className={styles.service__text}>
            Якщо ви турбуєтеся про хорошу видимість під час їзди, збереження
            навколишнього середовища або просто відчуваєте себе некомфортно у
            своєму автомобілі під час літньої спеки, обов'язково перевіряйте всі
            компоненти вашого автоматичного кондиціонера, перш ніж вони вийдуть
            з ладу. Наші кваліфіковані механіки обслужать систему кондиціювання
            вашого автомобіля якісно та професійно.
          </p>
          <h2 className={styles.service__title}>
            Антибактеріальне чищення системи кондиціювання салону
          </h2>
          <p className={styles.service__text}>
            Також одночасно із загальною підготовкою авто до літнього сезону
            необхідно провести чищення та антибактеріальну обробку кондиціонера
            автомобіля. Вона потрібна для того, щоб не просто позбутися
            неприємного запаху в салоні в салоні, але й для того, щоб очистити
            систему від пилу, бруду та застійної маси частинок, що потрапили у
            повітря. Також не можна забувати про те, що забруднене повітря
            завдає не тільки неприємних відчуттів, але і є причиною інфекційних
            захворювань. Вдихнувши таке повітря, можна підхопити будь-які
            хвороби – всілякі алергії, ангіни з ускладненнями, а також запалення
            легенів. Після проведення цих робіт потрібно провести заміну фільтра
            салону.Все це дає можливість бути впевненим у тому, що ви дихаєте
            чистим повітрям і вашому здоров'ю нічого загрожує.
          </p>
          <h2 className={styles.service__title}>Наша Гарантія </h2>
          <p className={styles.service__text}>
            <strong>Ми гарантуємо,</strong> що у вашому авто буде приємна
            прохолода і не буде запотівання. Уникайте дорогого ремонту
            кондиціонування, регулярно проходячи перевірку на нашому СТО.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default AutoConditioner;
