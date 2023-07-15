import GitHub from "./GitHub";
import styles from "./sns.module.scss";
import Twitter from "./Twitter";

type Props = {
  height?: number;
  width?: number;
};
const SNS = ({ height = 50, width = 50 }: Props) => {
  return (
    <div className={styles.wrapper}>
      <GitHub width={width} height={height} />
      <Twitter width={width} height={height} />
    </div>
  );
};
export default SNS;
