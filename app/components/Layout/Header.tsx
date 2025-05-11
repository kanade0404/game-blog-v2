import clsx from "clsx";
import { Suspense } from "react";
import HeaderList from "./HeaderList";
import styles from "./header.module.css";
import Loading from "../../loading";

const Header = () => {
	return (
		<header className={styles.siteHeader}>
			<div className={styles.siteHeaderWrapper}>
				<a className={clsx(styles.font, styles.fontActive)} href="/">
					kanade.log
				</a>
				<Suspense fallback={<Loading />}>
					<HeaderList />
				</Suspense>
			</div>
		</header>
	);
};
export default Header;
