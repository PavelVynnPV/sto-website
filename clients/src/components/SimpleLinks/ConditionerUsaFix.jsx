import React from "react";
import styles from "../styles/Main.module.css";

const ConditionerUsaFix = () => {
  return (
    <section className={styles.conditioner_usa__block}>
      <div className={styles.engine__content}>
        <div className={styles.conditioner_usa__banner}>
          <h1 className={styles.engine__banner_title}>
          Заправка автокондиционеров на американских авто

          </h1>
        </div>
        <div className={styles.engine__info}>
          <h2 className={styles.engine__title}>
            Почему мы заправляем r-134a вместо HFO-1234yf?
          </h2>
          <p className={styles.engine__text}>
            Фреон нового типа для современных систем автокондиционирования под
            брендом HFO-1234yf, согласно новому американскому и европейскому
            законодательству, в ближайшем будущем должен прийти на смену якобы
            не эффективного хладагента R-134a.<br/><br/> Согласно техническим требованиям
            c 2011г. автомобильные кондиционеры выходят из конвейерных лент
            американских европейских производителей автомобилей, заправленные
            исключительно новым фреоном - HFO-1234yf. При этом устаревший фреон
            - R-134a – будет использован в системах кондиционирования
            автомобилей, выпущенных до 2011 года. С 2017 года производители
            автомобилей будут вынуждены заменить систему кондиционирования в
            выпускаемых автомобилях, или полностью перестать их выпускать в
            Евросоюзе.<br/><br/> Вытеснит ли обновленный хладагент HFO-1234yf уже
            зарекомендовавший себя R-134a? <br/><br/>Главный вопрос в реалиях сегодняшнего
            авторынка - стоимость заправки нового фреона для автокондционеров. В
            Киеве заправка фреоном HFO-1234yf обойдется около 400$. А вот
            заправка фреоном старого образца R-134a - около 80$.<br/><br/>
            <strong>Но есть несколько нюансов в новом типе фреона.</strong><br/><br/>
            После перехода на фреон R-1234yf, Mercedes-Benz произвела
            технические тесты на воспламеняемость хладагента.<br/><br/> Их тест на
            практике был таким. Был взят небольшой бюджетный автомобиль с
            наддувом, нагрузкой двигателя «прогрели турбину» и сымитировали
            техническую поломку вентилятора системы охлаждения двигателя,
            которая привела к перегреву двигателя и подкапотного пространства.
            Затем провели тест на лобовое столкновение автомобиля. В результате
            чего произошел прорыв магистрали высокого давления системы
            кондиционирования, что привело к попаданию масла и газа с системы
            кондиционирования на перегретую турбину, что повлекло за собой
            воспламенение в подкапотном пространстве, а так же мгновенное
            помутнения лобового стекла как результат попадания на него
            фтористого водорода который содержится в данном фреоне.<br/><br/> У
            большинства автомобилей выпускной коллектор (одна из самых горячих
            частей двигателя) находится сразу за радиаторами. В случае попадания
            камня в радиатор при движении авто, масло с фреоном может попасть на
            коллектор, что при использовании фреона HFO-1234yf может стать
            причиной пожара. <br/><br/>В аналогичной ситуации фреон R-134a - наоборот
            будет вытеснять кислород и препятствовать горению. <br/><br/>Специалисты
            компании Mercedes-Benz сделали вывод: что новый фреон не
            соответствует европейским стандартам безопасности автомобилей.
            Mercedes немедленно прекратили использование нового фреона на своих
            авто, а так же перевели все выпускаемые автомобили на фреон R-134a
            используемый ранее.<br/><br/> А мы в свою очередь можем подтвердить, что
            работа системы кондиционирования на стандартном фреоне R-134a, будет
            такой же комфортной как на хладогенте нового типа.
          </p>
          <h2 className={styles.engine__title}>
            СТО «Роял Сервис» предлагает заправку автомобильных кондиционеров
            фреоном R-134a и уверяет вас, что работа вашего кондиционера будет
            такой же эффективной.
          </h2>

          <p>
            Записаться на заправку можно заранее записавшись по контактным
            телефонам в удобное время.
          </p>
          <ul className={styles.engine_table}>
            <li className={styles.engine_table__first}>
              <span>Услуги</span>
              <span>Цены</span>
            </li>
            <li>
              <span>Заправка и обслуживание автокодиционера </span>
              <span>500грн.</span>
            </li>
            <li>
              <span>Фреон 100 грамм </span>
              <span>90грн.</span>
            </li>
            <li>
              <span>
                Антибактериальная чистка системы кондиционирования салона +
                замена фильтра салона
              </span>
              <span>от 350грн.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConditionerUsaFix;
