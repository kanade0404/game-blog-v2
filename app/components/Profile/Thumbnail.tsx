import thumbnail from "./thumbnail.webp";
import Image from "next/image";

const Thumbnail = () => (
  <Image
    src={thumbnail}
    alt="profile"
    width={180}
    height={180}
    style={{
      borderRadius: "50%",
    }}
  />
);
export default Thumbnail;
