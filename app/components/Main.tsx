"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Content from "./Content";
import CategoryList from "./CategoryList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Loading from "../loading";

import styles from "./main.module.css";

const Main = ({ children }) => {
	const params = useSearchParams()
	const isArticlePage = pathname?.startsWith('/article/');

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.pageLayout}>
				{!isArticlePage && (
					<div className={styles.sidebar}>
						<Suspense fallback={<Loading />}>
							<CategoryList />
						</Suspense>
					</div>
				)}
				<Content>{children}</Content>
			</div>
			<Footer />
		</div>
	);
};
export default Main;
