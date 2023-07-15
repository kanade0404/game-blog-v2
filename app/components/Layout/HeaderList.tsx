"use client";

import styles from "./header.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderList() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.navWrapper}>
        <li className={styles.navItem}>
          <Link
            href="/"
            className={clsx(
              styles.font,
              pathname === "/" || pathname.startsWith("/article")
                ? styles.fontActive
                : styles.fontInactive,
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
