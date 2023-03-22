import Page from "@/lib/page";

const PATH = "/how-does-it-even-work";

export default Page.for(PATH);

export async function generateMetadata() {
  return await Page.metadata(PATH);
}
