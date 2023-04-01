import styles from "./Header.module.css";

function headerpresentation({ title }) {
  return <div className={styles.tt}>{title}</div>;
}

export default headerpresentation;
