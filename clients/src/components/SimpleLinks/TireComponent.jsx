import React from "react";
import styles from "../styles/Main.module.css";

const TireComponent = ({service}) => {
  return (
    <>
      <table>
        <tr>
          <td>РОЗМІР</td>
          <td>ЗНЯТТЯ/<br/> ВСТАНОВЛЕННЯ</td>
          <td>ШИНОМОНТАЖ</td>
          <td>БАЛАНСУВАННЯ</td>
          <td>1 КОЛЕСО</td>
          <td>4 КОЛЕСА</td>
        </tr>
        {service.map((service_item) => (
          <tr>
            <>
              <td>{service_item.size}</td>
              <td>{service_item.setUp}</td>
              <td>{service_item.tire}</td>
              <td>{service_item.balance}</td>
              <td>{service_item.one_circle}</td>
              <td>{service_item.four_circle}</td>
            </>
          </tr>
        ))}
      </table>
    </>
  );
};

export default TireComponent;
