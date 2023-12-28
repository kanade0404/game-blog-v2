import Image from "next/image";
import thumbnail from "./thumbnail.webp";

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
