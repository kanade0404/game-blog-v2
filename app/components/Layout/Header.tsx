import styles from "./header.module.scss";
import HeaderList from "./HeaderList";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderWrapper}>
        <a className={clsx(styles.font, styles.fontActive)} href="/">
          kanade.log
        </a>
        <HeaderList />
      </div>
    </header>
  );
};
export default Header;
