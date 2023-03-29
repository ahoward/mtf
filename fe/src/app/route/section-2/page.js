import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = `/route/section-2`;
const title = "[MTF] Section 2";
const image = "/og/section-2.png";

const media = [
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040559/route/section-2/PXL_20220707_062328453_2.jpg",
    alt: "Cas$h collie on the Rail Trail.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680040600/route/section-2/PXL_20220917_174128862.mp4",
    alt: "Hello Grouse!",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040563/route/section-2/PXL_20220929_032214807_2.jpg",
    alt: "Feels good to spin out the legs.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040562/route/section-2/PXL_20220917_184530293_2.jpg",
    alt: "Leaving Eska Falls...",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040559/route/section-2/PXL_20220917_172625067_2.jpg",
    alt: "Follow the yellow brick road.",
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
      <a href="/route/section-1" className="text-pink-600">
        &larr; 1 Section
      </a>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-person-hiking" />
      &nbsp; &nbsp;
      <a href="/route/section-3" className="text-pink-600">
        Section 3 &rarr;
      </a>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
