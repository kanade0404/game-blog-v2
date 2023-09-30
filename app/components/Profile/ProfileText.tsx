import ReactMarkdown from "react-markdown";

const ProfText = `
- work
  - Software Engineer
- like
  - Programming
  - Reading
  - Game
    - Mahjong
    - Pokemon
    - eFootball 2024(PS5)
`;
const ProfileText = () => (
  <div>
    <ReactMarkdown>{ProfText}</ReactMarkdown>
  </div>
);

export default ProfileText;
