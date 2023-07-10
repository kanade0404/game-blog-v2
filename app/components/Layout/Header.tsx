import styles from "./header.module.scss";
import clsx from "clsx";
import Link from "next/link";
type Props = {
  path: "home" | "profile";
};
const Header = ({ path }: Props) => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderWrapper}>
        <a className={clsx(styles.font, styles.fontActive)} href="/">
          kanade.log
        </a>
        <nav>
          <ul className={styles.navWrapper}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={clsx(
                  styles.font,
                  path === "home" ? styles.fontActive : styles.fontInactive,
                )}
              >
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={clsx(
                  styles.font,
                  path === "profile" ? styles.fontActive : styles.fontInactive,
                )}
                href="/profile"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
