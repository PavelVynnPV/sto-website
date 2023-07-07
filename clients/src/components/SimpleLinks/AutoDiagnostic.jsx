import React from "react";
import styles from "../styles/Main.module.css";
import {
  car_diagnostics1,
  car_diagnostics2,
  car_diagnostics3,
  diagnostics_injection,
  diagnostics_turbocharging,
} from "./helper";
import ServiceComponent from "./ServiceComponent";

const AutoDiagnostic = () => {
  return (
    <section className={styles.service__block} id={styles.autoDiagnostic_block}>
      <div className={styles.service__content}>
        <div className={styles.autodiagnostic__banner}>
          <h1 className={styles.service__banner_title}>
            Послуги з автодіагностики
          </h1>
        </div>
        <div className={styles.service__info}>
          <h2 className={styles.service__title}>Діагностика автомобіля</h2>

          <p className={styles.service__text}>
            Наша компанія надає послугу діагностики автомобіля, щоб забезпечити
            надійність та оптимальну роботу вашого транспортного засобу. Наші
            кваліфіковані механіки та високотехнологічне обладнання допоможуть
            виявити потенційні проблеми з системами автомобіля, такими як
            двигун, електрична система, підвіска, гальма та інші. Після
            проведення діагностики, ми зробимо повний звіт про стан вашого
            автомобіля і надамо рекомендації щодо подальшого обслуговування або
            ремонту. <br />
            <br />
            Зверніться до нас для професійної діагностики, щоб забезпечити
            безпеку та ефективність вашого автомобіля.
          </p>
          <ServiceComponent service={car_diagnostics1} />

          <ServiceComponent service={car_diagnostics2} />

          <ServiceComponent service={car_diagnostics3} />

          <h2 className={styles.service__title}>Діагностика турбонаддуву</h2>
          <p className={styles.service__text}>
            Наша компанія надає послугу діагностики турбонаддуву, щоб
            забезпечити правильну роботу та оптимальну продуктивність турбінного
            системи вашого автомобіля. Наші кваліфіковані спеціалісти здійснюють
            комплексну перевірку всіх компонентів турбонаддуву, включаючи
            турбокомпресор, втулку, паливний насос, датчики тиску та контролери.
            Ми використовуємо спеціальні діагностичні пристрої для виявлення
            можливих проблем, таких як витік або пошкодження, зменшення тиску,
            недостатній надлишок або нерівномірна робота турбонаддуву. Після
            діагностики ми надаємо повний звіт про стан системи турбонаддуву та
            рекомендації щодо необхідного обслуговування або ремонту.
            <br />
            <br />
            Звертайтеся до нас для професійної діагностики турбонаддуву і
            забезпечуйте надійну та ефективну роботу вашого автомобіля.
          </p>
          <ServiceComponent service={diagnostics_turbocharging} />

          <p className={styles.service__text}></p>
        </div>
      </div>
    </section>
  );
};

export default AutoDiagnostic;
