import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/team/nova");

export async function generateMetadata() {
  const image = "/og/nova-hamburger.png";
  const title = "Vanagon Fairie and Chief Airplane Thief (C.A.T)";
  return await Util.generateMetadata({ title, image });
}
