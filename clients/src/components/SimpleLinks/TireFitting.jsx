import React from "react";
import styles from "../styles/Main.module.css";
import { tire_table1, tire_table2, tire_table3 } from "./helper";
import TireComponent from "./TireComponent";

const TireFitting = () => {
  return (
    <section className={styles.service__block}>
      <div className={styles.service__content}>
        <div className={styles.tire__banner}>
          <h1 className={styles.service__banner_title}>Послуги шиномонтажу </h1>
        </div>
        <div className={styles.service__info}>
          <p className={styles.service__text}></p>
          "Професійний шиномонтаж від нашої команди експертів!
          <br />
          <br />
          Чи настав час змінити шини на вашому автомобілі? Залиште цю важливу
          роботу на наших досвідчених майстрах з шиномонтажу! Ми гордо
          пропонуємо високоякісні послуги заміни шин, балансування та контролю
          тиску у наших сучасно обладнаних приміщеннях.
          <br />
          <br />
          Наші майстри знають, як врахувати різні фактори, такі як розмір шин,
          тип автомобіля і умови їзди, щоб забезпечити оптимальну безпеку,
          комфорт та тривалість експлуатації шин. Ми піклуємося про кожну деталь
          і гарантуємо вам швидку та професійну обслуговування.
          <br />
          <br />
          Наша команда володіє великим досвідом у шиномонтажі та використовує
          передові технології індустрії, щоб забезпечити вам найкращі
          результати. Ми працюємо з усіма видами шин і забезпечуємо їх правильне
          установлення, балансування та вирівнювання. Ви можете бути впевнені,
          що ваші шини будуть обслуговуватися з уважністю та професіоналізмом.
          <br />
          <br />
          Наша мета - зробити процес шиномонтажу простим і зручним для вас.
          Запишіться на прийом зараз і довірте свої шини нам. Ми гарантуємо, що
          ви залишитесь задоволені нашою якістю обслуговування та швидкістю
          роботи.
          <br />
          <br />
          Звертайтесь до нас сьогодні, і ми з радістю забезпечимо ваш автомобіль
          оптимальними шинами та бездоганним шиномонтажем!"
        </div>
        <div className={styles.tire_content}>
          <TireComponent service={tire_table1} />
        </div>
        <div className={styles.tire_content}>
          <h2 className={styles.service__title}>
            КРОСОВЕР/МІНІВЕН/ПОЗАШЛЯХОВИК (4х4)
          </h2>

          <TireComponent service={tire_table2} />
        </div>
        <div className={styles.tire_content}>
          <h2 className={styles.service__title}>МІКРОАВТОБУС/ВАНТАЖНИЙ</h2>
          <TireComponent service={tire_table3} />{" "}
        </div>
      </div>
    </section>
  );
};

export default TireFitting;
