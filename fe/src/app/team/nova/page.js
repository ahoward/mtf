import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/team/nova");

export async function generateMetadata() {
  const image = "/og/nova-hamburger.png";
  return await Util.generateMetadata({ image });
}
