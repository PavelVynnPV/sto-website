import React from "react";
import styles from "../styles/Main.module.css";
import { Link, useNavigate} from "react-router-dom";

const AllServices = () => {
  const history = useNavigate();
  
  const handleClick = (id) => {
    history.push(`/${id}`);
  };

  return (
    <>
      <section className={styles.allServices}>
        <div className={styles.fix__blocks_container}>
          <Link to="/autodiagnostic" className={styles.fix__block} onClick={() => handleClick("autodiagnostic")}>
            <p className={styles.fix__block_text}>Автодіагностика</p>
          </Link>
          <Link to="/hodovaya" className={styles.fix__block} onClick={() => handleClick("servhodovayaice2")}>
            <p className={styles.fix__block_text}>Ремонт ходової</p>
          </Link>
          <Link to="/otherservices" className={styles.fix__block} onClick={() => handleClick("otherservices")}>
            <p className={styles.fix__block_text}>Інші послуги автосервісу</p>
          </Link>
          <Link to="/autoconditioner" className={styles.fix__block} onClick={() => handleClick("autoconditioner")}>
            <p className={styles.fix__block_text}>Автокондиціонер</p>
          </Link>
          <Link to="/tirefitting" className={styles.fix__block} onClick={() => handleClick("tirefitting")}>
            <p className={styles.fix__block_text}>Шиномонтаж</p>
          </Link>
          <Link to="/rozval" className={styles.fix__block} onClick={() => handleClick("rozval")}>
            <p className={styles.fix__block_text}>Розвал-сходження 3D</p>
          </Link>
          <Link to="/engine" className={styles.fix__block} onClick={() => handleClick("engine")}>
            <p className={styles.fix__block_text}>Ремонт двигуна</p>
          </Link>
          <Link to="/tehfluids" className={styles.fix__block} onClick={() => handleClick("tehfluids")}>
            <p className={styles.fix__block_text}>Заміна рідин</p>
          </Link>
          <Link to="/braksystem" className={styles.fix__block} onClick={() => handleClick("braksystem")}>
            <p className={styles.fix__block_text}>Гальмівна система</p>
          </Link>
          <Link to="/steering" className={styles.fix__block} onClick={() => handleClick("steering")}>
            <p className={styles.fix__block_text}>Рульова система</p>
          </Link>
          <Link to="/replacement_belts" className={styles.fix__block} onClick={() => handleClick("replacement_belts")}>
            <p className={styles.fix__block_text}>Заміна ременів</p>
          </Link>
          <Link to="/cooling_system" className={styles.fix__block} onClick={() => handleClick("cooling_system")}>
            <p className={styles.fix__block_text}>Система охолодження</p>
          </Link>
          <Link to="/clutch" className={styles.fix__block} onClick={() => handleClick("clutch")}>
            <p className={styles.fix__block_text}>Система зчеплення</p>
          </Link>
          <Link to="/injection" className={styles.fix__block} onClick={() => handleClick("injection")}>
            <p className={styles.fix__block_text}>Діагностика інжектора</p>
          </Link>
          <Link to="/ignition" className={styles.fix__block} onClick={() => handleClick("ignition")}>
            <p className={styles.fix__block_text}>Система запалювання</p>
          </Link>
            <Link to="/radiator" className={styles.fix__block} onClick={() => handleClick("radiator")}>
              <p className={styles.fix__block_text}>Заміна обігрівача салону</p>
            </Link>
            <Link to="/svarka" className={styles.fix__block} onClick={() => handleClick("svarka")}>
              <p className={styles.fix__block_text}>
                Зварювальні та <br />
                слюсарні роботи
              </p>
            </Link>
        </div>
      </section>
    </>
  );
};

export default AllServices;
