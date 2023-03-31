import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/team/marci";
const title = "Raised by goats";
const image =
  "http://res.cloudinary.com/mtf/image/upload/v1680040190/og/marci-sparkler.png";

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
