import styles from "./content.module.css";

const Content = ({ children }) => (
	<div className={styles.content}>
		<div className={styles.contentInner}>{children}</div>
	</div>
);
export default Content;
