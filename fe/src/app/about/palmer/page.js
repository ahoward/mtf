import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/about/palmer");

export async function generateMetadata() {
  const title = "Palmer, prettiest city in Alaska";
  return await Util.generateMetadata({ title });
}
