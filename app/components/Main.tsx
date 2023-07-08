import styles from "./main.module.scss";
const Main = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Main;
