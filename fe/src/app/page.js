import Page from "@/lib/page";

const path = "/";

export async function generateMetadata() {
  return await Page.metadata(path);
}

export default Page.for(path, { template: "hero" });
