import Page from "@/lib/page";
import Util from "@/lib/util";

const path = "/palmer";
const video =
  "http://static.mtf-trek.com/media/palmer/PXL_20220627_035705612.mp4";
const title = "Palmer, prettiest city in Alaska";
const image = "/og/palmer.png";

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
