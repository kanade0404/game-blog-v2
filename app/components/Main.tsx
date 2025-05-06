"use client";

import { usePathname } from "next/navigation";
import Content from "./Content";
import CategoryList from "./CategoryList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import styles from "./main.module.css";

const Main = ({ children }) => {
	const pathname = usePathname();
	const isArticlePage = pathname?.startsWith('/article/');
	
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.pageLayout}>
				{!isArticlePage && (
					<div className={styles.sidebar}>
						<CategoryList />
					</div>
				)}
				<Content>{children}</Content>
			</div>
			<Footer />
		</div>
	);
};
export default Main;
