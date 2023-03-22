import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/team/marci");

export async function generateMetadata() {
  const image = "/og/marci-sparkler.png";
  return await Util.generateMetadata({ image });
}
