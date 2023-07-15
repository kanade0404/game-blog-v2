import Main from "./components/Main";

import "./global.scss";
const siteName = "kanade0404";
const description = "主にゲームや麻雀についての感想・考察を書いています。";
const url = "https://kanade0404.com";

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@kanade0404",
    creator: "@kanade0404",
  },
  // verification: {
  //   google: "サーチコンソールのやつ",
  // },
  alternates: {
    canonical: url,
  },
};

// 以下略
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
