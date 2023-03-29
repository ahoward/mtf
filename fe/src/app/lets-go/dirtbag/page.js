import Page from "@/lib/page";
import Util from "@/lib/util";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm type="dirtbag" />
    </>
  );
};

export default Page.for("/lets-go/dirtbag", { footer });

export async function generateMetadata() {
  const title = "Sleep in your 🛻, slay all 🏔️ s";
  return await Util.generateMetadata({ title });
}
