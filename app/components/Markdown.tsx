import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  text: string;
};
const Markdown = ({ text }: Props) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
);
export default Markdown;
