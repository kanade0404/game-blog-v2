import Script from "next/script";

const Multiplex = () => (
  <>
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3827420749431145"
      crossOrigin="anonymous"
    />
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
      }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-3827420749431145"
      data-ad-slot="2617407248"
    ></ins>
    <Script>{"(adsbygoogle = window.adsbygoogle || []).push({});"}</Script>
  </>
);

export default Multiplex;
