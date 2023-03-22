import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/about/fun");

export async function generateMetadata() {
  const title = "Funner is *in-fact* a word...";
  return await Util.generateMetadata({ title });
}
