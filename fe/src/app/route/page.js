import Data from "@/lib/data";
import DefaultTemplate from "@/components/templates/default";
import Markdown from "@/components/markdown";

export default async function RoutePage() {
  const data = await Data.for("/route-page");
  const copy = data.copy;

  return (
    <>
      <DefaultTemplate active="/route">
        <Markdown copy={copy} />
      </DefaultTemplate>
    </>
  );
}
