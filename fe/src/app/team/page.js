import Data from "@/lib/data";
import DefaultTemplate from "@/components/templates/default";
import Markdown from "@/components/markdown";

export default async function TeamPage() {
  const data = await Data.for("/team-page");
  const copy = data.copy;

  return (
    <>
      <DefaultTemplate active="/team">
        <Markdown copy={copy} />
      </DefaultTemplate>
    </>
  );
}
