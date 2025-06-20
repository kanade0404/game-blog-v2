"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./categoryList.module.css";

type Props = {
	categories: {
		id: string;
		name?: string;
	}[];
};

const CategoryList = ({ categories }: Props) => {
	const pathname = usePathname();
	const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(
		null,
	);
	const isHomePage =
		pathname === "/" ||
		(!pathname.startsWith("/category/") && !pathname.startsWith("/article/"));

	useEffect(() => {
		if (pathname.startsWith("/category/")) {
			const categoryId = pathname.split("/")[2];
			setCurrentCategoryId(categoryId);
		} else {
			setCurrentCategoryId(null);
		}
	}, [pathname]);

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>カテゴリー</h2>
			<div className={styles.scrollContainer}>
				<ul className={styles.list}>
					{/* All Categories option */}
					<li
						key="all-categories"
						className={`${styles.item} ${isHomePage ? styles.active : ""}`}
						id={isHomePage ? "current-category" : undefined}
					>
						<Link
							href="/"
							className={`${styles.link} ${isHomePage ? styles.activeLink : ""}`}
						>
							すべて
						</Link>
					</li>

					{categories.map((category) => {
						const isActive = pathname.includes(`/category/${category.id}`);
						return (
							<li
								key={category.id}
								className={`${styles.item} ${isActive ? styles.active : ""}`}
								id={isActive ? "current-category" : undefined}
							>
								<Link
									href={`/category/${category.id}`}
									className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
								>
									{category.name || "カテゴリー"}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default CategoryList;
