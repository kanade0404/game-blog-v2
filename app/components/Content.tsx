import CategoryList from "./CategoryList";
import styles from "./content.module.css";

const Content = ({ children }) => (
	<div className={styles.content}>
		<div className={styles.contentInner}>
			<div className={styles.contentLayout}>
				<div className={styles.sidebar}>
					<CategoryList />
				</div>
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	</div>
);
export default Content;
