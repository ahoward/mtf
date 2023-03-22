import Page from "@/lib/page";

const PATH = "/sample";

export default Page.for(PATH);

export async function generateMetadata() {
  return await Page.metadata(PATH);
}
