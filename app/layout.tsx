import Main from "./components/Main";

import "./global.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
