import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = `/route/section-4`;
const title = "[MTF] Section 4";
const image = "/og/section-4.png";

const media = [
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680119227/route/section-4/IMG_20190701_151345.jpg",
    alt: "Nova and Ara on the dunes.",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680119460/route/section-4/PXL_20220902_042636540.MP_2.jpg",
    alt: "The Knik Basin, Jim Lakes, and Olive collie.",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680119376/route/section-4/PXL_20220913_003314337_2.jpg",
    alt: "Birch bark.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680119563/route/section-4/PXL_20220813_055825530.mp4",
    alt: "Dancing in downtown, Palmer.",
  },
  {
    type: "image",
    width: "2778",
    height: "2083",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680119684/route/section-4/PXL_20220805_235358219.MP_2.jpg",
    alt: "Kinna Moosey...",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680119875/route/section-4/PXL_20220929_030238234_2.mp4",
    alt: "Dangerous wild life!",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121111/route/section-4/PXL_20220930_024212304_3_1.jpg",
    alt: "Scouting lines with Marci.",
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
      <a href="/route/section-3" className="text-pink-600">
        &larr; 3 Section
      </a>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-person-hiking" />
      &nbsp; &nbsp;
      <a href="/route/section-5" className="text-pink-600">
        Section 5 &rarr;
      </a>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
