import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/photogz/nova";
const title = "Super Nova";
const image =
  "http://res.cloudinary.com/mtf/image/upload/v1680040193/og/nova-hamburger.jpg";

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
