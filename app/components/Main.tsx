import Content from "./Content";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import styles from "./main.module.scss";

const Main = ({ children }) => (
	<div className={styles.container}>
		<Header />
		<Content>{children}</Content>
		<Footer />
	</div>
);
export default Main;
