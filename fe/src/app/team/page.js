import Page from "@/lib/page";
import Util from "@/lib/util";

export async function generateMetadata() {
  const title = "Always be winning";
  const image =
    "http://res.cloudinary.com/mtf/image/upload/v1680040193/og/team.png";
  return await Util.generateMetadata({ title, image });
}

export default Page.for("/team");
