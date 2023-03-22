import Page from "@/lib/page";
import Util from "@/lib/util";

export async function generateMetadata() {
  return await Util.generateMetadata();
}

export default Page.for("/team");
