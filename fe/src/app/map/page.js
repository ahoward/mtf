import Page from "@/lib/page";
import Util from "@/lib/util";

const footer = function () {
  const src =
    "https://www.google.com/maps/d/edit?mid=1rO6hkj4cjExdD7tCxxGLzFGBb2RKk44&ll=61.61105306979719%2C-148.59559216845733&z=9";

  return (
    <>
      <br />

      <div className="text-left">
        <a
          href="https://www.google.com/maps/d/edit?mid=1rO6hkj4cjExdD7tCxxGLzFGBb2RKk44&ll=61.61105306979719%2C-148.59559216845733&z=9"
          rel="noreferrer"
          target="_blank"
          className="text-pink-600"
        >
          Check out the nifty Google map!
        </a>
      </div>

      <br />

      <iframe
        src="https://giphy.com/embed/d47Ixr4RoPkSkMlG"
        width="480"
        height="270"
        border="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a
          style={{ display: "none" }}
          href="https://giphy.com/gifs/movie-time-bandits-d47Ixr4RoPkSkMlG"
        >
          via GIPHY
        </a>
      </p>
    </>
  );
};

export default Page.for("/map", { footer });

export async function generateMetadata() {
  const title = "RETURN THE MAP!";
  return await Util.generateMetadata({ title });
}
