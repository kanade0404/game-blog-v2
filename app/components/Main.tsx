"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Content from "./Content";
import CategoryList from "./CategoryList";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Loading from "../loading";

import type { ReactNode } from "react";
import styles from "./main.module.css";
type Props = {
	children: ReactNode;
};
const Main = ({ children }: Props) => {
	const pathname = usePathname();
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
