import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>
        sip happens café
      </h1>
      <p className={styles.text}>
        Please leave your feedback about our
        service by selectiong one of the options
        below.
      </p>
    </div>
  );
};

export default Description;
