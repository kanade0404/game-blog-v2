import styles from "./content.module.scss";
const Content = ({ children }) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
};
export default Content;
