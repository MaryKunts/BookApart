import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <svg className={styles.wrapper} height="32" width="32">
        <circle cx="16" cy="16" r="8"></circle>
      </svg>
    </>
  );
};

export default Spinner;
