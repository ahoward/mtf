import Data from "@/lib/data";
import DefaultTemplate from "@/components/templates/default";
import Markdown from "@/components/markdown";

export default async function LetsGoPage() {
  const data = await Data.for("/lets-go");
  const copy = data.copy;

  return (
    <>
      <DefaultTemplate active="/lets-go">
        <Markdown copy={copy} />
      </DefaultTemplate>
    </>
  );
}
