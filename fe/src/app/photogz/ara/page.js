import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/photogz/ara";
const video =
  "https://strapi.matanuskafrontiertrek.com/uploads/PXL_20220626_215127405_2a8fe98279.mp4?updated_at=2023-03-23T19:14:07.237Z";
const title = "Ara ___T____ Howard to you";
const image = "/og/ara-mustache.png";

const header = function () {
  return <></>;
};

const footer = function () {
  return (
    <>
      <video controls>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
