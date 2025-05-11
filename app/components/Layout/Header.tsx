import clsx from "clsx";
import HeaderList from "./HeaderList";
import styles from "./header.module.css";

const Header = () => {
	return (
		<header className={styles.siteHeader}>
			<div className={styles.siteHeaderWrapper}>
				<a className={clsx(styles.font, styles.fontActive)} href="/">
					kanade.log
				</a>
				<HeaderList />
			</div>
		</header>
	);
};
export default Header;
