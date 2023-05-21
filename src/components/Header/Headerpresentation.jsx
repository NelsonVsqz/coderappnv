import styles from "./Header.module.css";

function headerpresentation({ title }) {

  return( <div className={styles.Header}>{title}</div> );

}

export default headerpresentation;
