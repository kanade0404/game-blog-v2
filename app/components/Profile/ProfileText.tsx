import ReactMarkdown from "react-markdown";

const ProfText = `
- work
  - Software Engineer
- like
  - Programming
  - Reading
  - Game
`;
const ProfileText = () => (
  <div>
    <ReactMarkdown>{ProfText}</ReactMarkdown>
  </div>
);

export default ProfileText;
