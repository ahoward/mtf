//"use client";

//import { GoogleAnalytics } from "nextjs-google-analytics";
//<GoogleAnalytics trackPageViews />
import Script from "next/script";

export default function GA(props) {
  const js = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PM582924EC');
  `;
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PM582924EC"
      ></Script>
      <Script id="ga.js">{js}</Script>
    </>
  );
}
