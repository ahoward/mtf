import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/rec-therapy";
const title = "Relax.";

const header = function () {
  return <></>;
};

const footer = function () {
  return <></>;
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title });
}
