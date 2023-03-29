import Page from "@/lib/page";
import Util from "@/lib/util";
import FontAwesome from "@/components/font_awesome";
import Carousel from "@/components/carousel";

const path = `/route/section-5`;
const title = "[MTF] Section 5";
const image = "/og/section-5.png";

const media = [
  {
    type: "image",
    width: "5280",
    height: "1625",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121374/route/section-5/PANO_20190614_131522.vr_1.jpg",
    alt: "In awe with Gary.",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121406/route/section-5/IMG_20190614_094130.jpg",
    alt: "You get to call the shots!",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121425/route/section-5/IMG_20190614_093457.jpg",
    alt: "Appoaching the wall of Pioneer.",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/mtf/video/upload/v1680121689/route/section-5/pioneer-summit.mp4",
    alt: "Pioneer summit 🥳!",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121965/route/section-5/IMG_20190614_141622.jpg",
    alt: "Living!",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680122116/route/section-5/IMG_20190628_162222.jpg",
    alt: "In the forest.",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680122163/route/section-5/IMG_20190628_164153.jpg",
    alt: "Soaking tired legs. And 🍻s.",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680122187/route/section-5/IMG_20190628_201125.jpg",
    alt: "Tunes in camp.",
  },
  {
    type: "image",
    width: "4032",
    height: "3024",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680121448/route/section-5/00100dPORTRAIT_00100_BURST20190614103548471_COVER.jpg",
    alt: "You made it!",
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
      <a href="/route/section-4" className="text-pink-600">
        &larr; 4 Section
      </a>
      &nbsp; &nbsp;
      <FontAwesome className="fa-solid fa-person-hiking" />
      &nbsp; &nbsp;
      <a href="/route" className="text-pink-600">
        Route &rarr;
      </a>
    </>
  );
};

export default Page.for(path, { header, footer });

export async function generateMetadata() {
  return await Util.generateMetadata({ title, image });
}
