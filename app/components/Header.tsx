import styles from "./header.module.scss";
import clsx from "clsx";
type Props = {
  path: "home" | "profile";
};
const Header = ({ path }: Props) => {
  return (
    <header className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.margin}>
          <a className={styles.name} href="/">
            kanade.log
          </a>
        </div>
        <div className={styles.margin}>
          <a className={clsx(styles.category, path === "home" ? styles.active : null)} href="/">
            Blog
          </a>
        </div>
        <div className={styles.margin}>
          <a
            className={clsx(styles.category, path === "profile" ? styles.active : null)}
            href="/profile"
          >
            Profile
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
