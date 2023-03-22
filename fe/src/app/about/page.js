import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/about");

export async function generateMetadata() {
  const title = "Everything you were afraid to ask...";
  return await Util.generateMetadata({ title });
}
