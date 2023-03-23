import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/palmer");

export async function generateMetadata() {
  const title = "Palmer, prettiest city in Alaska";
  const image = "/og/palmer.png";
  return await Util.generateMetadata({ title, image });
}
