import githubIcon from "./square-github-mini.svg";
import Image from "next/image";

type Props = {
  height: number;
  width: number;
};
const GitHub = ({ height, width }: Props) => (
  <a href="https://github.com/kanade0404" target="_blank" rel="noopener noreferrer">
    <Image src={githubIcon} alt="github@kanade0404" width={width} height={height} />
  </a>
);
export default GitHub;
