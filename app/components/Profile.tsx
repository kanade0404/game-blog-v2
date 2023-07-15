import styles from "./profile.module.scss";
import ProfileText from "./profileText";
import SNS from "./SNS";
import Thumbnail from "./Thumbnail";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Thumbnail />
      <ProfileText />
      <SNS />
    </div>
  );
};
export default Profile;
