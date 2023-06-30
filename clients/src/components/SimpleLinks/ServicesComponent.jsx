import React from "react";
import styles from "../styles/Main.module.css";
import ServiceComponent from "./ServiceComponent";

const ServicesComponent = ({
  serviceText,
  serviceText2,
  service,
  service2,
  service3,
  path,
}) => {
  return (
    <>
      <div className={styles.service__info}>
        {serviceText?.map((info) => (
          <>
            <h2 className={styles.service__title}>{info.title}</h2>
            <p
              className={styles.service__text}
              dangerouslySetInnerHTML={{ __html: info.txt1 }}
            ></p>
          </>
        ))}

        <ServiceComponent service={service} />
        {path === "autodiagnostic" ? (
          <>
            <ServiceComponent service={service2} />
            <ServiceComponent service={service3} />
          </>
        ) : null}
         {path === "tehfluids" ? (
          <>
           {serviceText2?.map((info) => (
          <>
            <h2 className={styles.service__title}>{info.title}</h2>
            <p
              className={styles.service__text}
              dangerouslySetInnerHTML={{ __html: info.txt1 }}
            ></p>
          </>
        ))}
            <ServiceComponent service={service2} />
          </>
        ) : null}
      </div>
    </>
  );
};

export default ServicesComponent;
