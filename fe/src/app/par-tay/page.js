import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/par-tay";
const title = "MTF === Par Tay!";
const image =
  "http://res.cloudinary.com/mtf/image/upload/v1680040192/og/glitter.png";

const header = function () {
  return <></>;
};

const footer = function () {
  return <></>;
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
