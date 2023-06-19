import React from "react";
import styles from "../styles/Main.module.css";
import { rozval } from "./helper";
import ServiceComponent from "./ServiceComponent";

const Rozval = () => {
  return (
    <section className={styles.service__block}>
      <div className={styles.service__content}>
        <div className={styles.rozval__banner}>
          <h1 className={styles.service__banner_title}>Розвал-сходження 3D</h1>
        </div>
        <div className={styles.service__info}>
          <p className={styles.service__text}>
            Майже кожен водій як мінімум хоч раз у житті стикався з регулюванням
            розвалу сходження. Це могло траплятися як після зміни літньої та
            зимової гуми, так і після ремонту ходової. Правильна робота розвалу
            сходження забезпечує хорошу маневреність машини, збільшує термін
            експлуатації покришок, і загалом робить керування автомобілем
            легшим.
          </p>
          <h2 className={styles.service__title}>
            У чому перевага 3D Розвалу-Сходження над звичайним?
          </h2>
          <ul className={styles.service__list}>
            <li>
              Більшість людей часто асоціюють позначення «3D» з форматом
              перегляду фільмів або як про нову технологію в сучасних
              телевізорах. Ми розуміємо, що під цим позначенням прийнято мати на
              увазі об'ємну картину. Під час будови 3D-стендів також
              використовувався принцип тривимірного зображення (у разі – коліс).
              Таким чином, на стенді можна побачити не лише кут нахилу кожного з
              коліс, а й загальний вигляд положення осей.На відміну від
              3D-стендів минулого покоління, в яких перепад за рівнем
              горизонтальності поверхні для регулювання розвалу сходження не
              повинен перевищувати 3 міліметри, у сучасних стендах перепади
              горизонтальності майданчика можуть налічувати десятки сантиметрів
              – і це ніяк не позначиться на точності результатів.
            </li>
            <li>
              Крім того, 3D-стенд дозволяє не катати автомобіль вперед і назад,
              тим самим не піддаючи колісні диски биття. Діагностика кутів
              розвалу сходження відбувається і в без того навантаженому стані
              машини, що значно економить дорогоцінний час клієнта, який за
              підсумком отримає на 100% правильну інформацію про стан розвалу
              сходження. На стендах головного типу минулого покоління
              компенсація робилася рахунок піднятої осі.Ця процедура виміру
              розвалу сходження більш клопітна, і має недоліки. При використанні
              3D-стенду все простіше, адже з його допомогою можна виявити
              приховані дефекти в геометрії кузова машини – це дозволяє зробити
              одночасну діагностику обох осей.
            </li>
            <li>
              Устаткування 3D-стенду не потребує калібрування, що дозволяє
              гарантувати точність отриманих результатів при вимірі кутів
              розвалу сходження. Це також підтверджує простоту інтерфейсу
              програми – навіть людина, яка не вникає в нюанси, зрозуміє, що
              зелена колір діаграми означає - все гаразд, тоді як червоний колір
              сигналізує про виявлене відхилення від норми.
            </li>
          </ul>
          <p className={styles.service__text}>
            <strong>СТО «ANDRCARS»</strong> надають послугу з вимірювання та
            регулювання кутів розвалу сходження вашої машини. Всі дії виконуємо
            на сучасному лазерному 3D-стенді «Hunter».
          </p>
          <h2 className={styles.service__title}>
            Підсумовуючи, ми виявили такі переваги сучасних 3D-стендів:
          </h2>
          <ul className={styles.service__list}>
            <li>якість та точність вимірювань розвалу сходження;</li>
            <li>швидкість виконуваної роботи;</li>
            <li>
              відсутність зайвих розвантажень на автомобіль, як наслідок –
              солідна економія часу;
            </li>
            <li>
              можливість перевірки автомобіля щодо дефектів геометрії кузова;
            </li>
            <li>самостійний контроль клієнта за якістю виконаної роботи;</li>
          </ul>
          <p className={styles.service__text}>
            У результаті клієнт отримує добре відрегульовану і слухняну, легко
            маневрену машину, а також продовжує термін експлуатації шин на більш
            тривалий час.
          </p>
          <ServiceComponent service={rozval} />
        </div>
      </div>
    </section>
  );
};

export default Rozval;