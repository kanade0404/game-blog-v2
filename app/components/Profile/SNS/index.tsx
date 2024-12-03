import GitHub from "./GitHub";
import Twitter from "./Twitter";
import styles from "./sns.module.css";

type Props = {
	height?: number;
	width?: number;
};
const Index = ({ height = 50, width = 50 }: Props) => {
	return (
		<div className={styles.wrapper}>
			<GitHub width={width} height={height} />
			<Twitter width={width} height={height} />
		</div>
	);
};
export default Index;
