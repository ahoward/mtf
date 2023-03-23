import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/photogz/marci";
const video =
  "https://strapi.matanuskafrontiertrek.com/uploads/PXL_20220911_053347842_2_1_1f5e73c09f.mp4?updated_at=2023-03-23T19:28:18.588Z";
const title = "All goats, all the time";
const image = "/og/marci-sparkler.png";

const header = function () {
  return <></>;
};

const footer = function () {
  return (
    <>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
