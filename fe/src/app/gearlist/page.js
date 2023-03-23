import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/gearlist");

export async function generateMetadata() {
  const title = "Packed for the M.T.F!";
  const image = "/og/gear.png";
  return await Util.generateMetadata({ title, image });
}
