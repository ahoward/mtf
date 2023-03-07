import "./globals.css";
import util from "@/lib/util";

class Emoji {
  static dragon = "🐉";
  static mountain = "⛰";
  static fire = "🔥";
  static herb = "🌿";
  static beers = "🍻";
  static dancer = "💃🏿";
}

export async function generateMetadata({ params }) {
  const title = "MATANUSKA FRÖNTIER TREK";
  const description = `High around the Valley :: ${Emoji.dragon} + ${Emoji.mountain} + ${Emoji.fire} + ${Emoji.herb} + ${Emoji.beers} + ${Emoji.dancer}`;
  const images = ["/MTF-OG.png"];
  const openGraph = { title, description, images };
  const robots = { index: true };
  const metadata = { title, openGraph, robots };
  util.log("debug", "metadata", metadata);
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
