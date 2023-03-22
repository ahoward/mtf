import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/lets-go/slow-your-roll");

export async function generateMetadata() {
  const title = "😌 Relax, we'll get there";
  return await Util.generateMetadata({ title });
}
