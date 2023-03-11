import HeroTemplate from "@/components/templates/hero";
import Markdown from "@/components/markdown";

import Data from "@/lib/data";

export default async function HomePage() {
  const data = await Data.for("/home-page");
  const copy = data.copy;

  return (
    <>
      <HeroTemplate active="/">
        <Markdown copy={copy} />
      </HeroTemplate>
    </>
  );
}
