import React from "react";
import styles from "../styles/Main.module.css";

const ToAutoFix = () => {
  return (
    <section className={styles.toAuto__block}>
      <div className={styles.engine__content}>
        <div className={styles.toAuto__banner}>
          <h1 className={styles.engine__banner_title}>ТО автомобиля
</h1>
        </div>
        <div className={styles.engine__info}>
          <p>
            Что бы ваш автомобиль постоянно был исправным, необходимо регулярно
            проводить техническое обслуживание автомобиля. ТО поможет продлить
            беспроблемный срок службы вашего авто.
          </p>
          <h2 className={styles.engine__title}>
            Ниже представлены основные работы, которые входят в плановое ТО.
          </h2>
          <ul className={styles.engine__list}>
            <li>Замена моторного масла масла</li>
            <li>Замена масла КПП/АКПП</li>
            <li>Замена фильтров автомобиля</li>
          </ul>
          <p>
            <strong>Проверка уровня рабочих жидкостей:</strong>
          </p>
          <ul className={styles.engine__list}>
            <li>тормозной системы</li>
            <li>гидроусилителя руля</li>
            <li>системы охлаждения</li>
            <li>трансмиссии</li>
          </ul>
          <p>
            <strong>Тормозной системы:</strong>
          </p>
          <ul className={styles.engine__list}>
            <li>тормозных колодок</li>
            <li>тормозных дисков</li>
            <li>Проверка / регулировка ручника</li>
          </ul>

          <p className={styles.engine__text}>
            А так же другие работы направленные на проверку состояния вашего
            автомобиля.
          </p>
          <h2 className={styles.engine__title}>
            Своевременное прохождение ТО позволяет продлить срок эксплуатации
            вашего автомобиля и предупредить поломки.{" "}
          </h2>
          <ul className={styles.engine__list}>
            <li>
              Диагностику авто необходимо проводить каждые 10 - 15 тыс. км., или
              1 раз в год
            </li>
            <li>
              Моторное масло необходимо менять каждые 10 - 15 тыс. км., или 1
              раз в год
            </li>
            <li>
              Проверка тормозной системы необходима каждые 30 тыс. км., или 1
              раз год
            </li>
            <li>
              Свечи зажигания ДВС требуют замены 30 - 90 тыс. км. в зависимости
              от марки автомобиля
            </li>
          </ul>
          <p>
            <strong>Фильтра:</strong>
          </p>
          <ul className={styles.engine__list}>
            <li>
              Масляный фильтр всегда меняют вместе с заменой моторного масла,
              каждые 10 - 15 тыс. км
            </li>
            <li>Замена топливного фильтра согласно регламента вашего авто</li>
            <li>Воздушный фильтр желательно менять каждые 20 тыс.км</li>
            <li>
              Салонный фильтр меняют в зависимости от его загрязнения (20 –
              40тыс.км)
            </li>
          </ul>
          <p>
            <strong>А так, же:</strong>
          </p>
          <ul className={styles.engine__list}>
            <li>
              Рулевое управление необходимо проверять каждые 10 - 15 тыс. км.
            </li>
            <li>Промывка форсунок и топливной системы каждые 60 тыс. км.</li>
            <li>
              Замена ремня ГРМ роликов и приводных ремней каждые 60 - 90 тыс.
              км., в зависимости от марки автомобиля
            </li>
          </ul>
          <p>
            Это все признаки того, что вам необходим ремонт подвески
            специалистами СТО ''РОЯЛ СЕРВИС''. Нашим техникам можно доверить
            ремонт подвески вашего автомобиля.
          </p>

          <h2 className={styles.engine__title}>
            Масло необходимо менять, следуя рекомендациям производителя. Однако
            есть факторы которые могут сократить интервалы обслуживания:{" "}
          </h2>
          <ul className={styles.engine__list}>
            <li>
              Резкие разгоны и торможения, а так же частое нахождение в пробках
            </li>
            <li>Частые перерывы в использовании автомобиля</li>
            <li>Использование некачественного топлива</li>
          </ul>
          <p>
            Сотрудники компании Роял Сервис помогут вам поддерживать ваш
            автомобиль в хорошем техническом состоянии. А ваш автомобиль в свою
            очередь отблагодарит вас надежной работой, за потраченное на него
            время и деньги.
          </p>

          <ul className={styles.engine_table}>
            <li className={styles.engine_table__first}>
              <span>Услуги</span>
              <span>Цены</span>
            </li>
            <li>
              <span>Замена масла </span>
              <span>от 150грн.</span>
            </li>
            <li>
              <span>Замена топливного фильтра(Бензин) </span>
              <span>от 100грн.</span>
            </li>
            <li>
              <span>Замена топливного фильтра(Дизель) </span>
              <span>от 450грн.</span>
            </li>
            <li>
              <span>Замена воздушного фильтра </span>
              <span>от 100грн.</span>
            </li>
            <li>
              <span>Замена салонного фильтра </span>
              <span>от 200грн.</span>
            </li>
            <li>
              <span>Замена масла КПП </span>
              <span>от 300грн.</span>
            </li>
            <li>
              <span>Замена тормозных колодок </span>
              <span>от 200грн.</span>
            </li>
            <li>
              <span>Замена тормозных дисков </span>
              <span>от 400грн.</span>
            </li>
            <li>
              <span>Замена тормозных барабанов </span>
              <span>от 400грн.</span>
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

export default ToAutoFix;
