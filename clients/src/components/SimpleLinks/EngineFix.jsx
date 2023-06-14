import React from "react";
import styles from "../styles/Main.module.css";

const EngineFix = () => {
  return (
    <section className={styles.engine__block}>
      <div className={styles.engine__content}>
        <div className={styles.engine__banner}>
          <h1 className={styles.engine__banner_title}>Ремонт и техническое обслуживание двигателей</h1>
        </div>
        <div className={styles.engine__info}>
          <p className={styles.engine__text}>
            Если вам пришлось столкнутся с неполадками в работе двигателя, то
            перво-наперво необходимо провести качественную диагностику:
          </p>
          <ul className={styles.engine__list}>
            <li>Измерить компрессию;</li>
            <li>Проверить правильность работы всех систем автомобиля и т.д;</li>
          </ul>
          <p className={styles.engine__text}>
            И если все-таки выяснится, что вашему двигателю необходим ремонт, то
            вы можете полностью на нас положится. Мы сделаем это быстро,
            качественно и недорого.
          </p>
          <h2 className={styles.engine__title}>
            Причины, которые могут привести к поломке двигателя
          </h2>
          <ul className={styles.engine__list}>
            <li>
              Неправильная эксплуатация (чрезмерные нагрузки, перегрев, резкие
              торможения и разгоны);
            </li>
            <li>Игнорирование интервалов технического обслуживания;</li>
            <li>Использование некачественного масла и фильтров;</li>
            <li>Заправка некачественным топливом;</li>
            <li>
              Также следует следить за сигнальной лампой на щитке приборов;
            </li>
          </ul>
          <h2 className={styles.engine__title}>
            Причины, которые могут привести к поломке двигателя
          </h2>
          <ul className={styles.engine__list}>
            <li>Загорелась сигнальная лампочка Check-In на щитке приборов;</li>
            <li>Нехарактерный стук двигателя на холостых оборотах;</li>
            <li>
              Визг, доносящийся из-под капота, говорит о том, что необходима
              замена водяного насоса;
            </li>
            <li>Черный или синий дым из выхлопной трубы;</li>
            <li>Неприятный запах горелого масла;</li>
          </ul>
          <h2 className={styles.engine__title}>
            Мы делаем все виды ремонта двигателей
          </h2>
          <ul className={styles.engine__list}>
            <li>Ремонт бензиновых двигателей;</li>
            <li>Ремонт дизельных двигателей;</li>
            <li>Ремонт головки блока цилиндров;</li>
            <li>Ремонт двигателя с частичной и полной разборкой;</li>
            <li>И многие другие работы по двигателю;</li>
          </ul>
          <p>
            <strong>Обратившись к нам, вы сделаете правильный выбор.</strong>
          </p>
          <ul className={styles.engine_table}>
            <li className={styles.engine_table__first}>
              <span>Услуги</span>
              <span>Цены</span>
            </li>
            <li>
              <span>Замена прокладки клапанной крышки </span>
              <span>360грн</span>
            </li>
            <li>
              <span>Замена ремня ГРМ </span>
              <span>2000грн.</span>
            </li>
            <li>
              <span>Ремонт ГБЦ </span>
              <span>от 3500грн.</span>
            </li>
            <li>
              <span>Замена радиатора охлаждения </span>
              <span>650грн.</span>
            </li>
            <li>
              <span>Замена ремня генератора </span>
              <span>300грн.</span>
            </li>
            <li>
              <span>Замена сцепления </span>
              <span>2000грн.</span>
            </li>
            <li>
              <span>Чистка дросельной заслонки </span>
              <span>350грн.</span>
            </li>
            <li>
              <span>Замена прокладки впускного коллектора </span>
              <span>800грн.</span>
            </li>
            <li>
              <span>Замена прокладки ГБЦ </span>
              <span>3500грн.</span>
            </li>
          </ul>
          <p className={styles.engine__text}>
            Здесь только перечень основных услуг, за остальными услугами -
            звоните нашим менеджерам. Они с радостью вас проконсультируют
          </p>
          <p>
            <strong>
              *Все цены указаны на базе автомобиля Daewoo Lanos. В зависимости
              от модели авто, а так же от сложности ремонта конкретного
              автомобиля цена может меняться.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineFix;
