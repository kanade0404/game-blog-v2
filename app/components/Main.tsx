import Content from "./Content";
import CategoryList from "./CategoryList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import styles from "./main.module.css";

const Main = ({ children }) => (
	<div className={styles.container}>
		<Header />
		<div className={styles.pageLayout}>
			<div className={styles.sidebar}>
				<CategoryList />
			</div>
			<Content>{children}</Content>
		</div>
		<Footer />
	</div>
);
export default Main;
