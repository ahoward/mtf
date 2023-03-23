import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/team/aj");

export async function generateMetadata() {
  const title = "Always has glitter";
  const image = "/og/aj-just-one-more.png";
  //const image = "/og/aj-square.png";
  return await Util.generateMetadata({ title, image });
}
