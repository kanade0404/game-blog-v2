import twitterIcon from "./square-twitter-mini.svg";
import Image from "next/image";

type Props = {
  height: number;
  width: number;
};
const Twitter = ({ height, width }: Props) => (
  <a href="https://twitter.com/kanade0404" target="_blank" rel="noopener noreferrer">
    <Image src={twitterIcon} alt="twitter@kanade0404" width={width} height={height} />
  </a>
);
export default Twitter;
