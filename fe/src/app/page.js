import Page from "@/lib/page";
import Carousel from "@/components/carousel";

const template = "hero";

const media = [
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680284956/global/wonderland.jpg",
    alt: "Welcome to wonderland! ;-)",
  },
  {
    type: "image",
    width: "4080",
    height: "3072",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680203259/global/PXL_20220930_024212304_3_1.jpg",
    alt: "Scouting...",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680203258/global/PXL_20220913_002018786_2.jpg",
    alt: "The time is now.",
  },
  {
    type: "image",
    width: "3024",
    height: "4032",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680203262/global/IMG_20190628_162222.jpg",
    alt: "Live.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040504/route/section-1/PXL_20220918_021112088_2.jpg",
    alt: "Psychedelia.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040498/route/section-1/PXL_20220917_214503509_3.jpg",
    alt: "Actually real.  Near Palmer, Alaska.",
  },
  {
    type: "image",
    width: "3072",
    height: "4080",
    src: "https://res.cloudinary.com/mtf/image/upload/v1680040471/route/section-1/original_6db6dc40-c2ea-42d3-880c-f5ad26268187_PXL_20220912_224818649_2.jpg",
    alt: "Have you read the hobbit?  It's like that...",
  },
];

const footer = function () {
  return (
    <>
      <br />
      <Carousel media={media} />
      <br />
    </>
  );
};

export default Page.for("/", { template, footer });
