import "./globals.css";

import Util from "@/lib/util";
//import GA from "@/components/ga";
//<GA />

export async function generateMetadata() {
  return await Util.generateMetadata();
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
