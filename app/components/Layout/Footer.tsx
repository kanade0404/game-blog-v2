import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.font}>@kanade0404 ©️2023</p>
			<Link href="/privacy" className={styles.font}>
				プライバシーポリシー
			</Link>
			<Link
				href="https://forms.gle/6yX1TU82PVUxg1Hc8"
				target="_blank"
				rel="noreferrer noopener"
				className={styles.font}
			>
				お問い合わせ
			</Link>
			<Link href="/profile" className={styles.font}>
				運営者情報
			</Link>
		</footer>
	);
};

export default Footer;
