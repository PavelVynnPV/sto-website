import React from "react";
import styles from "../styles/Main.module.css";
import { Link } from "react-router-dom";
import { SwiperBottomSlider, SwiperSlider } from "../SwiperSlider";

const Main = () => {
  return (
    <>
      <SwiperSlider />
      <section className={styles.advances}>
        <div className={styles.advances__container}>
          <h1 className={styles.advances__title}>
            Чому варте співпрацювати з СТО «ANDRCARS»
          </h1>
          <div className={styles.advances__blocks_container}>
            <div className={styles.advances__block}>
              <span className={styles.advances__man_icon}></span>
              <div className={styles.advances__text_container}>
                <h1 className={styles.advances_block__title}>
                  Професійна консультація
                </h1>
                <p className={styles.advances_block__text}>
                  Вас обслуговують тілько професійні майстри, які доступно и
                  повністю пояснять вашу проблему
                </p>
              </div>
            </div>
            <div className={styles.advances__block}>
              <span className={styles.advances__time_icon}></span>
              <div className={styles.advances__text_container}>
                <h1 className={styles.advances_block__title}>
                  Ремонт точно в строк
                </h1>
                <p className={styles.advances_block__text}>
                  Ваш автомобіль буде готовий, в обговорений з майстром час
                </p>
              </div>
            </div>
            <div className={styles.advances__block}>
              <span className={styles.advances__secure_icon}></span>
              <div className={styles.advances__text_container}>
                <h1 className={styles.advances_block__title}>
                  Гарантія на послуги
                </h1>
                <p className={styles.advances_block__text}>
                  Ми надаєм повну гарантію на послуги, які були надані нашим СТО
                </p>
              </div>
            </div>
            <div className={styles.advances__block}>
              <span className={styles.advances__repair_icon}></span>
              <div className={styles.advances__text_container}>
                <h1 className={styles.advances_block__title}>
                  Оригінальні автозапчастини
                </h1>
                <p className={styles.advances_block__text}>
                  Ми володіємо всіма сертифікатами від найбільших постачальників
                  автозапчастин в Україні
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.fix_kinds}>
        <h1 className={styles.advances__title}>
          СТО «ANDRCARS» всі види ремонту та технічного обслуговування
          <br /> автомобілів
        </h1>
        <p>
          Мы предоставляем качественные услуги по диагностике и техническому
          обслуживанию авто в Киеве. Специалисты с многолетним опытом выполняют
          самые сложные задачи.
        </p>
        <div className={styles.fix__blocks_container}>
          <Link to="/enginefix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Ремонт двигунів</p>
          </Link>
          <Link to="/hodovaya" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Ремонт ходової</p>
          </Link>
          <Link to="/toautofix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>ТО автомобіля</p>
          </Link>
          <Link to="/electricfix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Автоелектрик</p>
          </Link>
          <Link to="/conditionerfix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Автокондиціонер</p>
          </Link>
          <Link to="/conditionerusafix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Автокондиціонери США</p>
          </Link>
          <Link to="/rozvalfix" className={styles.fix__block}>
            <p className={styles.fix__block_text}>Розвал-схождения 3D</p>
          </Link>
        </div>
      </section>
      <section className={styles.diagnostic}>
        <div className={styles.diagnostic__container}>
          <h1 className={styles.advances__title}>
            Діагностика і ремонт автомобіля в Києві
          </h1>
          <p className={styles.diagnostic__text}>
            Для більшості людей автомобіль стає невід'ємною частиною і в якомусь
            сенсі найкращим другом. Який мовчазно допомагає у найважчих життєвих
            обставинах. Тому логічно, коли і ви допомагаєте своєму другові
            завжди залишатися бадьорим і здоровим, то і він у свою чергу вам за це
            безмежно віддячить.
            <br />
            <br /> Колектив СТО «ANDRCARS» із задоволенням та професіоналізмом
            допоможе вам тримати вашого «залізного коня» у чудовій формі. А вам
            залишається лише не забувати періодично заїжджати до нас.
            <br />
            <br /> СТО "ANDRCARS" займається ремонтом автомобілів впродовж
            тривалого часу. Ми нагромадили величезний досвід у
            роботі та навчили багато висококласних фахівців для свого
            автосервісу.
            <br />
            <br /> Наше СТО є мультибрендовим. Ми професійно робимо ремонт
            комерційних та легкових автомобілів різних виробників. Спектр
            послуг, які ми надаємо та кількість спеціального обладнання –
            величезний. Тому, звертаючись до нас, вам не доведеться бігати по
            всьому місту для вирішення вашої проблеми.
            <br />
            <br />
            Також на нашому СТО вам завжди допоможуть з підбором та доставкою
            автозапчастин на ваш автомобіль. Хочу відмітити за гарною ціною та
            високою якістю. У нас завжди велика наявність запчастин на складі, а
            також швидка доставка зі складів наших партнерів.
            <br />
            <br /> <strong>З повагою, колектив СТО «ANDRCARS»</strong>
          </p>
        </div>
      </section>
      <section className={styles.bottom_slider}>
        <SwiperBottomSlider />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.1616811428316!2d30.425691999999998!3d50.4194592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c955dc751c8f%3A0x6215c067abe7eebc!2z0J7RgtGA0LDQtNC90YvQuSDQv9GALdGCLiwgOTUsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1686730729672!5m2!1sru!2sua"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="place"
      ></iframe>
    </>
  );
};

export default Main;
