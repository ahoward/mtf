import "@/app/globals.css";

export default function RootLayout({ children }) {
  const segmentPath = children.props.segmentPath;
  const childProp = children.props.childProp;

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <b>42</b>
        {children}
      </body>
    </html>
  );
}
