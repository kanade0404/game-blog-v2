import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Script from "next/script";

export const Analytics = () => {
  if (process.env.NODE_ENV !== "production") {
    return <></>;
  }
  const { GOOGLE_ANALYTICS_ID } = process.env;
  if (!GOOGLE_ANALYTICS_ID) {
    console.warn("GOOGLE_ANALYTICS_ID not defined");
    return <></>;
  }

  return (
    <>
      <VercelAnalytics debug={false} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALYTICS_ID}', {
          page_path: window.location.pathname,
        });
      `}</Script>
    </>
  );
};
