import ProfileText from "./ProfileText";
import SNS from "./SNS";
import Thumbnail from "./Thumbnail";
import styles from "./profile.module.css";

const Index = () => {
	return (
		<div className={styles.wrapper}>
			<Thumbnail />
			<ProfileText />
			<SNS />
		</div>
	);
};
export default Index;
