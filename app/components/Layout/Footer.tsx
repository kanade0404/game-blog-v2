import styles from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.font}>@kanade0404 ©️2023</p>
      <Link href="/privacy" className={styles.font}>
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
