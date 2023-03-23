"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function GA(props) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  );
}
