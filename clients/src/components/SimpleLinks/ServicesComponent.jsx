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
            {/* <p
              className={styles.service__text}
              dangerouslySetInnerHTML={{ __html: info.txt1 }}
            ></p> */}
          </>
        ))}

        {path === "autodiagnostic" ? (
          <>
            {/* <h3 className={styles.service__title}>Діагностика автомобіля:</h3> */}
            <ServiceComponent service={service} path={path} />
            {path === "autodiagnostic" ? (
              <>
                <h3 className={styles.service__title}>
                  Комп'ютерна діагностика автомобіля:
                </h3>

                <ServiceComponent service={service2} path={path} />
                <h3 className={styles.service__title}>
                  Комплексна діагностика автомобіля:
                </h3>

                <ServiceComponent service={service3} path={path} />
              </>
            ) : null}
          </>
        ) : (
          <>
            <ServiceComponent service={service} />
            {path === "autodiagnostic" ? (
              <>
                <ServiceComponent service={service2} path={path} />
                <ServiceComponent service={service3} path={path} />
              </>
            ) : null}
            {path === "tehfluids" ? (
              <>
                {serviceText2?.map((info) => (
                  <>
                    <h2 className={styles.service__title}>{info.title}</h2>
                    {/* <p
                      className={styles.service__text}
                      dangerouslySetInnerHTML={{ __html: info.txt1 }}
                    ></p> */}
                  </>
                ))}
                <ServiceComponent service={service2} path={path} />
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default ServicesComponent;
