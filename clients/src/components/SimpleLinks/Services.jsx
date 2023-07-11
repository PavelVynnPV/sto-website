import ScrollToTop from "../ScrollToTop";
import styles from "../styles/Main.module.css";
import ServicesComponent from "./ServicesComponent";
import {
  autodiagnostic_txt,
  braking_system,
  break_txt,
  car_diagnostics1,
  car_diagnostics2,
  car_diagnostics3,
  clutch,
  clutch_txt,
  cooling_system,
  cooling_system_txt,
  diagnostics_injection,
  diagnostics_injection_txt,
  engine_repair,
  engine_txt,
  filters_txt,
  fluids_txt,
  hodova,
  hodova_txt,
  repair_ignition,
  repair_ignition_txt,
  replacement_belts,
  replacement_belts_txt,
  replacement_filters,
  replacement_technical,
  replacing_interior,
  replacing_interior_txt,
  steering,
  steering_txt,
  svarka,
  svarka_txt,
} from "./helper";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const [windowServiceTitle, setWindowServiceTitle] = useState("");
  const [windowServiceTxt, setWindowServiceTxt] = useState([]);
  const [windowServiceTxt2, setWindowServiceTxt2] = useState([]);
  const [windowService, setWindowService] = useState([]);
  const [windowService2, setWindowService2] = useState([]);
  const [windowService3, setWindowService3] = useState([]);

  const location = useLocation();
  let paths = location.pathname.split("/").filter((path) => path !== "");

  useEffect(() => {
    let window_location_title;
    let window_location_txt;
    let window_location_txt2;
    let window_location_service;
    let window_location_service2;
    let window_location_service3;

    const windowHrefChanger = () => {
      if (paths[0] === "autodiagnostic") {
        window_location_title = "Послуги з автодіагностики";
        window_location_txt = autodiagnostic_txt;
        window_location_service = car_diagnostics1;
        window_location_service2 = car_diagnostics2;
        window_location_service3 = car_diagnostics3;
      } else if (paths[0] === "tehservice") {
      } else if (paths[0] === "electric") {
      } else if (paths[0] === "hodovaya") {
        window_location_title = "Послуги з ремонту ходової";
        window_location_txt = hodova_txt;
        window_location_service = hodova;
      } else if (paths[0] === "otherservices") {
      } else if (paths[0] === "autoconditioner") {
      } else if (paths[0] === "tirefitting") {
      } else if (paths[0] === "rozval") {
      } else if (paths[0] === "engine") {
        window_location_title = "Ремонт та обслуговування двигуна";
        window_location_txt = engine_txt;
        window_location_service = engine_repair;
      } else if (paths[0] === "tehfluids") {
        window_location_title = "Послуги з технічного обслуговування";
        window_location_txt = fluids_txt;
        window_location_txt2 = filters_txt;
        window_location_service = replacement_technical;
        window_location_service2 = replacement_filters;
      } else if (paths[0] === "braksystem") {
        window_location_title = "Гальмівна система";
        window_location_txt = break_txt;
        window_location_service = braking_system;
      } else if (paths[0] === "steering") {
        window_location_title = "Рульова система";
        window_location_txt = steering_txt;
        window_location_service = steering;
      } else if (paths[0] === "cooling_system") {
        window_location_title = "Система охолодження";
        window_location_txt = cooling_system_txt;
        window_location_service = cooling_system;
      } else if (paths[0] === "replacement_belts") {
        window_location_title = "Заміна ременів та ланцюга приводу ГРМ";
        window_location_txt = replacement_belts_txt;
        window_location_service = replacement_belts;
      } else if (paths[0] === "clutch") {
        window_location_title = "Система зчеплення";
        window_location_txt = clutch_txt;
        window_location_service = clutch;
      } else if (paths[0] === "injection") {
        window_location_title = "Діагностика інжектора";
        window_location_txt = diagnostics_injection_txt;
        window_location_service = diagnostics_injection;
      } else if (paths[0] === "ignition") {
        window_location_title = "Ремонт системи запалювання";
        window_location_txt = repair_ignition_txt;
        window_location_service = repair_ignition;
      } else if (paths[0] === "radiator") {
        window_location_title = "Заміна обігрівача салону (радіатора пічки)";
        window_location_txt = replacing_interior_txt;
        window_location_service = replacing_interior;
      } else if (paths[0] === "svarka") {
        window_location_title = "Зварювальні та слюсарні роботи";
        window_location_txt = svarka_txt;
        window_location_service = svarka;
      } else {
      }
    };

    windowHrefChanger();
    setWindowServiceTitle(window_location_title);
    setWindowServiceTxt(window_location_txt);
    setWindowServiceTxt2(window_location_txt2);
    setWindowService(window_location_service);
    setWindowService2(window_location_service2);
    setWindowService3(window_location_service3);
  }, [paths]);

  return (
    <>
      <section className={styles.service__block}>
        <div className={styles.service__content}>
          <div className={`${styles[`${paths}__banner`]}`}>
            <h1 className={styles.service__banner_title}>
              {windowServiceTitle}
            </h1>
          </div>
          <ServicesComponent
            serviceText={windowServiceTxt}
            serviceText2={windowServiceTxt2}
            service={windowService}
            service2={windowService2}
            service3={windowService3}
            path={paths[0]}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
