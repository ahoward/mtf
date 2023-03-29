import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = `/route/section-3`;
const title = "[MTF] Section 3";
const image = "/og/section-3.png";

const media = [
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040618/route/section-3/PXL_20220710_014021991.MP_2.jpg",
    alt: "Germans love ⛰️ 🌸",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040616/route/section-3/PXL_20220710_030832348_2.jpg",
    alt: "Josh coming fown from Matanuska Peak around 8pm.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680105947/route/section-3/PXL_20220730_021904997_2.mp4",
    alt: "Running towards Matanuska Peak at ~ 10pm!",
  },
  {
    type: "image",
    width: "7532",
    height: "2292",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040616/route/section-3/PXL_20220628_070638305.PHOTOSPHERE_2.jpg",
    alt: "THIS IS MIDNIGHT!",
  },
  {
    type: "image",
    width: "7532",
    height: "2292",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040607/route/section-3/original_12148e83-8959-4efa-868d-2cefcb4dc02b_PXL_20220710_012759921.jpg",
    alt: "Mordor?",
  },
  {
    type: "image",
    width: "2880",
    height: "3840",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680117911/route/section-3/PXL_20220920_022230389_2.jpg",
    alt: "Lunch time in the rain.",
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
      <a href="/route/section-2" className="text-pink-600">
        &larr; 2 Section
      </a>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-person-hiking" />
      &nbsp; &nbsp;
      <a href="/route/section-4" className="text-pink-600">
        Section 4 &rarr;
      </a>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
