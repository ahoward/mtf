import Page from "@/lib/page";
import Util from "@/lib/util";

const path = `/route/section-2`;
const video = "";
const title = "[MTF] Section 2";
const image = "/og/section-2.png";

const header = function () {
  return <></>;
};

const footer = function () {
  return (
    <></>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
