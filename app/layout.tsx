import Main from "./components/Main";

import { ReactNode } from "react";
import "./global.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
