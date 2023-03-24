import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/photogz/nova";
const video =
  "https://strapi.matanuskafrontiertrek.com/uploads/PXL_20220623_053001359_8309cbaa41.mp4?updated_at=2023-03-23T19:12:30.892Z";
const title = "Super Nova";
const image = "/og/nova-hamburger.png";

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
