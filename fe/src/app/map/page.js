import Page from "@/lib/page";
import Util from "@/lib/util";

const footer = function () {
  return <></>;
};

export default Page.for("/map", { footer });

export async function generateMetadata() {
  const title = "RETURN THE MAP!";
  return await Util.generateMetadata({ title });
}
