import Header from "./components/Header";
import Main from "./components/Main";
import { ReactNode } from "react";

import "./global.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header path="home" />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
