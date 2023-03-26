import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/par-tay";
const video =
  "https://strapi.matanuskafrontiertrek.com/uploads/PXL_20220703_061618859_89c1a1c826.mp4?updated_at=2023-03-26T20:14:25.008Z";
const title = "MTF === Par Tay!";
const image = "/og/glitter.png";

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
