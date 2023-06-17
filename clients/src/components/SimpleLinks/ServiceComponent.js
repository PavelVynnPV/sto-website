import React from "react";
import styles from "../styles/Main.module.css";

const ServiceComponent = ({ service }) => {
  console.log(service?.warning)
  return (
    <>
      <ul className={styles.service_table}>
        <li className={styles.service_table__first}>
          <span>Послуги</span>
          <span>Ціни</span>
        </li>
        {service.map((service_item) => {
          let newText = service_item.warning.charAt(0).toUpperCase() + service_item.warning.slice(1);

          return(
          <>
            <li>
              <span>{service_item.name}</span>
              <span>{service_item.price}</span>
            </li>
            <li
              className={
                service_item.warning.length !== 0
                  ? styles.under_service__text
                  : styles.unActive
              }
            >
              <div className={styles.warning}>
              <i class="fa-solid fa-arrow-up"></i>
              <p>{newText}</p>
              <i class="fa-solid fa-arrow-up"></i>
              </div>
            </li>
          </>
          
        )})}
        
      </ul>
    </>
  );
};

export default ServiceComponent;
