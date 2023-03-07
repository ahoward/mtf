import "@/app/globals.css";

export default function RootLayout({ children }) {
  const segmentPath = children.props.segmentPath;
  const childProp = children.props.childProp;

  return (
    <>
      <b>42</b>
      {children}
    </>
  );
}
