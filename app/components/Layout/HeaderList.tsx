"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./header.module.css";

export default function HeaderList() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const isBlogActive = pathname === "/" || pathname.startsWith("/article");
	
	return (
		<nav>
			<ul className={styles.navWrapper}>
				<li className={styles.navItem}>
					<Link
						href="/"
						className={clsx(
							styles.font,
							isBlogActive ? styles.fontActive : styles.fontInactive,
						)}
					>
						Blog
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link
						className={clsx(
							styles.font,
							pathname === "/profile" ? styles.fontActive : styles.fontInactive,
						)}
						href="/profile"
					>
						Profile
					</Link>
				</li>
			</ul>
		</nav>
	);
}
