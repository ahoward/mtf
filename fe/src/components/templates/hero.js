import Link from "next/link";

import Navbar from "@/components/navbar";
import MTF from "@/components/mtf";
import Footer from "@/components/footer";
import FontAwesome from "@/components/font_awesome";

/*
                      <Link
                        href="https://letmegooglethat.com/?q=MTF+Matanuska"
                        target="_blank"
                      >
                      </Link>
*/

export default async function HeroTemplate(props) {
  const active = props.active || "/";
  const height = props.height || "700";

  const backgroundImage =
    //props.backgroundImage || "/templates/hero/background.jpg";
    props.backgroundImage ||
    //"https://res.cloudinary.com/mtf/image/upload/v1680114111/templates/hero/hero-background.jpg";
    "https://res.cloudinary.com/mtf/image/upload/v1680114226/templates/default/default-background.jpg";

  return (
    <>
      <Navbar active={active} theme="dark" />

      <main className="hero-template">
        <section className="relative block" style={{ height: `${height}px` }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-0 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white text-black text-xl bg-opacity-80 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <MTF />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-0 sm:mt-0">
                      <a
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xl px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        href="/lets-go"
                      >
                        <FontAwesome className="fa-solid fa-dragon mr-2" />
                        Let&apos;s Go!
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center text-gray-700">
                        <Link href="/route">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            <FontAwesome className="fa-mountain fa-solid fa-lg" />
                            <br></br>
                            99
                          </span>
                          <span className="text-sm text-gray-500">
                            Miles of Mountains
                          </span>
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link href="/how-does-it-even-work">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            <FontAwesome className="fa-person-hiking fa-solid fa-lg" />
                            <br></br>
                            33,333
                          </span>
                          <span className="text-sm text-gray-500">
                            Feet of Climbing
                          </span>
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link href="/par-tay">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            <FontAwesome className="fa-brands fa-pagelines fa-solid fa-lg" />
                            <br></br>
                            420
                          </span>
                          <span className="text-sm text-gray-500">
                            Levels of Awesome
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 py-8 text-center">
                  <div className="flex flex-wrap">
                    <div className="w-full px-4">
                      <div className="mb-4 text-lg leading-relaxed text-gray-800">
                        {props.children}
                      </div>
                    </div>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
