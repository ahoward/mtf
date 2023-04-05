import Navbar from "@/components/navbar";
import MTF from "@/components/mtf";
import Logo from "@/components/logo";
import Footer from "@/components/footer";

export default async function DefaultTemplate(props) {
  const active = props.active || "/";
  const height = props.height || "700";

  const backgroundImage =
    //props.backgroundImage || "/templates/default/background.jpg";
    props.backgroundImage ||
    "https://res.cloudinary.com/mtf/image/upload/v1680114111/templates/hero/hero-background.jpg";

  return (
    <>
      <Navbar active={active} theme="light" />

      <main className="default-template">
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
                      <Logo />
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
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
