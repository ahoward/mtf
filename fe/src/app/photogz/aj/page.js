import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/photogz/aj";
const video =
  "https://strapi.matanuskafrontiertrek.com/uploads/PXL_20230217_063436236_2_a40ba1562b.mp4";
const title = "AJPIX";
const image = "/og/aj-just-one-more.png";

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
