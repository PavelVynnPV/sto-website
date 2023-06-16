import React from "react";
import styles from "../styles/Main.module.css";
import {
  steering,
  transmisia,
  clutch,
  exhaust_system,
  cooling_system,
  engine_repair,
} from "./helper";
import ServiceComponent from "./ServiceComponent";

const OtherServices = () => {
  return (
    <section className={styles.service__block}>
      <div className={styles.service__content}>
        <div className={styles.other_services__banner}>
          <h1 className={styles.service__banner_title}>
            Інші послуги автосервісу
          </h1>
        </div>
        <div className={styles.service__info}>
          <h2 className={styles.service__title}>Рульове управління</h2>

          <p className={styles.service__text}>
            Наша компанія займається ремонтом рульового управління, що є
            важливою складовою частиною системи керування автомобілем. Рульове
            управління включає в себе рульову колонку, рейку керма, насос
            гідропідсилювача (якщо присутній), рульові тяги та інші компоненти.
            <br />
            <br />
            Наші кваліфіковані механіки проводять діагностику рульового
            управління для виявлення можливих проблем, таких як знос,
            пошкодження або несправність компонентів. Ми здійснюємо ремонт
            рульової колонки, заміну рейки керма, налагодження і ремонт
            гідропідсилювача (якщо присутній), заміну рульових тяг та інших
            необхідних деталей.
            <br />
            <br />
            Ми використовуємо лише якісні запасні частини та сучасне обладнання
            для проведення ремонту рульового управління. Наші експерти
            забезпечать правильне налаштування та функціонування рульової
            системи, що дозволить вам керувати автомобілем з комфортом і
            безпекою.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту рульового управління
            вашого автомобіля. Ми зробимо все можливе, щоб відновити його
            оптимальну роботу та забезпечити вам безпечну керованість
            автомобілем.
          </p>
          <ServiceComponent service={steering} />

          <h2 className={styles.service__title}>Трансмісія</h2>

          <p className={styles.service__text}>
            Наша компанія спеціалізується на ремонті трансмісії автомобіля, що
            відповідає за передачу потужності з двигуна на колеса. Трансмісія
            складається з різних компонентів, таких як механічна коробка
            передач, автоматична трансмісія, муфти, шестерні, ланцюги,
            підшипники та інші деталі.
            <br />
            <br />
            Наші висококваліфіковані техніки здійснюють діагностику трансмісії
            для виявлення проблем, таких як знос деталей, пошкодження шестерень,
            неправильна робота муфт або ланцюгів, витік оливи та інші
            несправності. Після діагностики, ми пропонуємо докладний звіт про
            стан трансмісії та рекомендації щодо ремонтних робіт.
            <br />
            <br />
            Ми використовуємо якісні запасні частини, які відповідають
            стандартам виробників, та сучасне обладнання для виконання ремонту
            трансмісії. Наші експерти здійснюють заміну пошкоджених деталей,
            ремонт механізмів та налагодження трансмісії для відновлення її
            оптимальної роботи.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту трансмісії вашого
            автомобіля. Ми забезпечимо надійну та ефективну роботу трансмісії,
            що дозволить вам насолоджуватися комфортною та безпечною їздою.
          </p>
          <ServiceComponent service={transmisia} />

          <h2 className={styles.service__title}>Зчеплення</h2>

          <p className={styles.service__text}>
            Наша компанія надає послуги з ремонту зчеплення, яке відіграє
            важливу роль у передачі потужності з двигуна на трансмісію
            автомобіля. Зчеплення складається з диска зчеплення, пресуючого
            механізму, вижимного підшипника та інших компонентів.
            <br />
            <br />
            Наші висококваліфіковані техніки проводять діагностику зчеплення для
            виявлення можливих проблем, таких як знос диска зчеплення,
            несправність пресуючого механізму або вижимного підшипника,
            неправильна робота зчеплення та інші несправності. Після
            діагностики, ми рекомендуємо необхідний обсяг ремонтних робіт та
            заміну деталей.
            <br />
            <br />
            Ми використовуємо високоякісні запасні частини, що відповідають
            стандартам виробників, та сучасне обладнання для виконання ремонту
            зчеплення. Наші експерти здійснюють заміну пошкоджених деталей,
            налаштовують та тестують зчеплення для його оптимальної роботи.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту зчеплення вашого
            автомобіля. Ми забезпечимо надійну роботу зчеплення та відновимо
            його ефективність, що дозволить вам насолоджуватися плавною та
            безпроблемною зміною передач при керуванні автомобілем.
          </p>
          <ServiceComponent service={clutch} />

          <h2 className={styles.service__title}>Вихлопна система</h2>

          <p className={styles.service__text}>
            Наша компанія спеціалізується на ремонті вихлопної системи
            автомобіля, що відповідає за відведення вихлопних газів з двигуна та
            зменшення шкідливих викидів в атмосферу. Вихлопна система
            складається з вихлопного колектора, глушника, каталізатора (якщо
            присутній), трубопроводів та інших компонентів.
            <br />
            <br />
            Наші кваліфіковані механіки проводять діагностику вихлопної системи
            для виявлення можливих проблем, таких як пошкодження глушника,
            засмічення каталізатора, протікання трубопроводів або інші
            несправності. Після діагностики, ми рекомендуємо необхідні ремонтні
            роботи та заміну деталей для відновлення оптимальної роботи
            вихлопної системи.
            <br />
            <br />
            Ми використовуємо якісні запасні частини та сучасне обладнання для
            виконання ремонту вихлопної системи. Наші експерти здійснюють заміну
            пошкоджених компонентів, ремонт трубопроводів, очищення або заміну
            каталізатора та інші необхідні налаштування.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту вихлопної системи вашого
            автомобіля. Ми забезпечимо надійну та ефективну роботу вихлопної
            системи, зменшимо викиди шкідливих речовин та забезпечимо вам
            комфортну та екологічно чисту їзду.
          </p>
          <ServiceComponent service={exhaust_system} />

          <h2 className={styles.service__title}>Система охолодження</h2>

          <p className={styles.service__text}>
            Наша компанія займається ремонтом системи охолодження автомобіля,
            яка відповідає за підтримання оптимальної температури двигуна та
            запобігання його перегріву. Система охолодження складається з
            радіатора, вентилятора, водяного насоса, термостата, шлангів та
            резервуара з охолоджуючою рідиною.
            <br />
            <br />
            Наші кваліфіковані механіки проводять діагностику системи
            охолодження для виявлення можливих проблем, таких як витік
            охолоджуючої рідини, несправність радіатора, неефективна робота
            вентилятора, проблеми з водяним насосом або інші несправності. Після
            діагностики, ми рекомендуємо необхідні ремонтні роботи та заміну
            деталей для забезпечення надійної роботи системи охолодження.
            <br />
            <br />
            Ми використовуємо якісні запасні частини, що відповідають стандартам
            виробників, та сучасне обладнання для виконання ремонту системи
            охолодження. Наші експерти здійснюють заміну пошкоджених
            компонентів, ремонт радіатора, налагодження вентилятора та інші
            необхідні регулювання.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту системи охолодження
            вашого автомобіля. Ми забезпечимо ефективне охолодження двигуна,
            запобіжимо перегріву та збережемо його оптимальну роботу. Ваш
            автомобіль буде готовим до подолання будь-яких дорожніх випробувань
            з надійною системою охолодження.
          </p>
          <ServiceComponent service={cooling_system} />

          <h2 className={styles.service__title}>
            Ремонт та обслуговування двигуна
          </h2>

          <p className={styles.service__text}>
            Наша компанія надає широкий спектр послуг з ремонту та
            обслуговування двигуна вашого автомобіля. Ми розуміємо, що двигун є
            серцем автомобіля і його надійна робота є важливою для безперебійної
            їзди.
            <br />
            <br />
            Наші висококваліфіковані механіки здійснюють діагностику двигуна для
            виявлення можливих проблем, таких як знос деталей, протікання масла,
            неправильна робота системи палива або засмічення фільтрів. Після
            діагностики, ми рекомендуємо необхідні ремонтні роботи та заміну
            деталей, що можуть включати ремонт циліндрів, регулювання клапанів,
            заміну поршнів, ремонт системи палива та інші.
            <br />
            <br />
            Ми використовуємо якісні запасні частини, які відповідають
            стандартам виробників, та сучасне обладнання для виконання ремонтних
            робіт. Наші експерти мають глибокі знання про різні типи двигунів та
            їх роботу, що дозволяє їм забезпечити якісний ремонт та
            обслуговування.
            <br />
            <br />
            Крім ремонту, ми також пропонуємо регулярне обслуговування двигуна,
            включаючи заміну масла та фільтрів, регулювання клапанів, очищення
            системи палива та інші профілактичні заходи, які допоможуть зберегти
            оптимальну роботу двигуна.
            <br />
            <br />
            Звертайтеся до нас для професійного ремонту та обслуговування
            двигуна вашого автомобіля. Ми прагнемо забезпечити надійну та
            ефективну роботу вашого двигуна, щоб ви могли насолоджуватися
            безперебійною їздою і максимізувати тривалість його експлуатації.
          </p>
          <ServiceComponent service={engine_repair} />
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
