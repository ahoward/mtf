import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = `/route/section-1`;
const title = "[MTF] Section 1";
const image = "/og/section-1.png";

const media = [
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040498/route/section-1/PXL_20220917_214503509_3.jpg",
    alt: "Olive near Elbow Pass, behind Eska.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040504/route/section-1/PXL_20220918_021112088_2.jpg",
    alt: "Ca$h and Olive chilling on the tundra above the Little Susitna.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040480/route/section-1/PXL_20220913_003618280_2.jpg",
    alt: "Happy ladies heading up Government Peak.",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040482/route/section-1/PXL_20220914_033549965_4.jpg",
    alt: "The clouds can move in fast.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040465/route/section-1/PXL_20220913_223355285_3.jpg",
    alt: "Stoked and wet. Gold Cord Lake.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680113522/route/section-1/beavers.mp4",
    alt: "Beaver watchin...",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680113745/route/section-1/PXL_20220913_002018786_2.jpg",
    alt: "Go time!",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040493/route/section-1/PXL_20220917_213420531_2.jpg",
    alt: "Bear snack.",
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
      <a href="/route" className="text-pink-600">
        &larr; Route
      </a>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-person-hiking" />
      &nbsp; &nbsp;
      <a href="/route/section-2" className="text-pink-600">
        Section 2 &rarr;
      </a>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
