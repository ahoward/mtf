import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/matanuska-thunder-truck");

export async function generateMetadata() {
  const title = "🛻 RAWR!!!";
  return await Util.generateMetadata({ title });
}
