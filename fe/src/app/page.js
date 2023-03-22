import Page from "@/lib/page";

const path = "/";

export async function generateMetadata() {
  const metadata = await Page.metadata(path);
  //console.dir({ metadata });
  return await Page.metadata(path);
}

export default Page.for(path, { template: "hero" });
