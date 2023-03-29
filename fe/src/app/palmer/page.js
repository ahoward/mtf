import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = "/palmer";
const title = "Palmer, prettiest city in Alaska";
const image =
  "http://res.cloudinary.com/mtf/image/upload/v1680040193/og/palmer.png";

const media = [
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680039873/palmer/PXL_20220627_035705612.mp4",
    alt: "Pioneer from Palmer farm country.",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680039847/palmer/PXL_20220624_235914425.MP.jpg",
    alt: "Outside of downtown Palmer.",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680039844/palmer/PXL_20220624_023807738.MP.jpg",
    alt: "Riding bikes with Nova.",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680039840/palmer/PXL_20220717_002154758.jpg",
    alt: "Local culture.",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680039843/palmer/PXL_20220713_065251732.MP.jpg",
    alt: "It runs deep.",
  },
];

const header = function () {
  return <></>;
};

const footer = function () {
  return (
    <>
      <br />
      <Carousel media={media} />
      <br />
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
