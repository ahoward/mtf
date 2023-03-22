import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/route");

export async function generateMetadata() {
  const title = "Here Be Dragons!";
  return await Util.generateMetadata({ title });
}
