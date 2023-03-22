import Page from "@/lib/page";
import Util from "@/lib/util";

export default Page.for("/lets-go/3-way");

export async function generateMetadata() {
  const title = "We know you're a busy 🦫, but there's still time to 🎉";
  return await Util.generateMetadata({ title });
}
