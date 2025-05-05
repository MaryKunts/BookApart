import styles from "./Spinner.module.scss";

export const Spinner = ({ height = 32, width = 32 }) => (
  <svg
    className={styles.wrapper}
    style={{ "--radius": width / 4 }}
    height={height}
    width={width}>
    <circle cx={width / 2} cy={height / 2} r={width / 4} />
  </svg>
);
