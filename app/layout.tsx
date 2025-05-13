import type { ReactNode } from "react";
import { Analytics } from "./components/Analytics";
import Main from "./components/Main";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./global.css";
const siteName = "kanade.log";
const description = "主にゲームや麻雀についての感想・考察を書いています。";
const url = "https://kanade0404.com";
const author = "kanade0404";

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
		site: author,
		creator: "author",
	},
	alternates: {
		canonical: url,
	},
	creator: author,
	publisher: author,
	formatDetection: {
		telephone: false,
		email: false,
		address: false,
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3827420749431145"
					crossOrigin="anonymous"
				/>
			</head>
			<Analytics />
			<body>
				<Main>{children}</Main>
				<SpeedInsights />
			</body>
		</html>
	);
}
