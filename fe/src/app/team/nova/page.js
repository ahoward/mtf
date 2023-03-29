import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/team/nova");

export async function generateMetadata() {
  const image =
    "http://res.cloudinary.com/mtf/image/upload/v1680040193/og/nova-hamburger.jpg";
  const title = "Vanagon Fairie and Chief Airplane Thief (C.A.T)";
  return await Util.generateMetadata({ title, image });
}
