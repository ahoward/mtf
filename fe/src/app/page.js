//import Image from "next/image";
//import styles from "./page.module.css";
// https://actionauta.com/notes/integrating-tailwind-css-modules-sass-stylelint-nextjs

import api from "@/lib/api";
import util from "@/lib/util";

import FontAwesome from "@/components/font_awesome";
import MTF from "@/components/mtf";
import Navbar from "@/components/navBar";

function hero_for(data) {
  const hero = {
    key: "attributes.hero.image.data.attributes.url",
  };
  hero.value = util.get(data, hero.key);
  hero.url = api.img_url_for(hero.value);
  return hero;
}

export default async function Home() {
  const result = await api.fetch("/home-page", {
    populate: ["hero", "hero.image"],
  });
  //if (!result.ok) throw new Error("no data");
  const data = result.json.data;

  const hero = hero_for(data);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "700px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${hero.url}')`,
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
            <div className="relative flex flex-col min-w-0 break-words bg-white bg-opacity-80 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <MTF />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <a
                        className="bg-pink-600 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xl px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        href="/book-it"
                      >
                        Let&apos;s Go!
                        <FontAwesome className="fa-solid fa-dragon ml-4" />
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center text-gray-700">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          <FontAwesome className="fa-mountain fa-solid fa-lg" />
                          <br></br>
                          100
                        </span>
                        <span className="text-sm text-gray-500">
                          Miles of Mountains
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          <FontAwesome className="fa-person-hiking fa-solid fa-lg" />
                          <br></br>
                          50,000
                        </span>
                        <span className="text-sm text-gray-500">
                          Feet of Climbing
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          <FontAwesome className="fa-brands fa-pagelines fa-solid fa-lg" />
                          <br></br>
                          420
                        </span>
                        <span className="text-sm text-gray-500">
                          Levels of Awesome
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
