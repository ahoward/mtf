import "./globals.css";

import emoji from "@/lib/emoji";

export async function generateMetadata({ params }) {
  const title = "MATANUSKA FRÖNTIER TREK";
  const description = `High around the Valley :: ${emoji.dragon} + ${emoji.mountain} + ${emoji.fire} + ${emoji.herb} + ${emoji.beers} + ${emoji.dancer}`;
  const images = ["/MTF-OG.png"];
  const openGraph = { title, description, images };
  const robots = { index: true };
  const metadata = { title, openGraph, robots };
  return metadata;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
