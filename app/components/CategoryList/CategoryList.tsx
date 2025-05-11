"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./categoryList.module.css";

type Props = {
	categories: {
		id: string;
		name?: string | null;
	}[];
};

const CategoryList = ({ categories }: Props) => {
	const searchParams = useSearchParams();
	const categoryIdParam = searchParams.get("category_id");

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>カテゴリー</h2>
			<div className={styles.scrollContainer}>
				<ul className={styles.list}>
					<li
						key="all-categories"
						className={`${styles.item} ${categoryIdParam ? "" : styles.active}`}
						id={categoryIdParam ? undefined : "current-category"}
					>
						<Link
							href="/"
							className={`${styles.link} ${categoryIdParam ? "" : styles.activeLink}`}
						>
							すべて
						</Link>
					</li>

					{categories.map((category) => {
						const isActive = categoryIdParam === category.id;
						return (
							<li
								key={category.id}
								className={`${styles.item} ${isActive ? styles.active : ""}`}
								id={isActive ? "current-category" : undefined}
							>
								<Link
									href={`/?category_id=${category.id}`}
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
