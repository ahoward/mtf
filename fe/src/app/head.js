import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>

      <Script
        id="fontawesome"
        src="https://kit.fontawesome.com/c6bd86d823.js"
      />

      <title>MATANUSKA FRÖNTIER TREK</title>
      <meta name="robots" content="index" />
      <meta property="og:title" content="MATANUSKA FRÖNTIER TREK" />
      <meta
        property="og:description"
        content="High around the Valley :: 🐉+⛰+🔥+🌿+🍻+💃🏿
@ Palmer, Alaska"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:url"
        content="http://static.mtf-trek.com/og/olive-and-cash.png"
      />
    </>
  );
}
