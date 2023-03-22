import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/lets-go");

export async function generateMetadata() {
  const title = "#WOOT! Let's goooooooooo! 🤘";
  return await Util.generateMetadata({ title });
}
