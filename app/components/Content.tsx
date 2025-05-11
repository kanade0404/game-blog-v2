import type { ReactNode } from "react";
import styles from "./content.module.css";

const Content = ({ children }: { children: ReactNode }) => (
	<div className={styles.content}>
		<div className={styles.contentInner}>{children}</div>
	</div>
);
export default Content;
