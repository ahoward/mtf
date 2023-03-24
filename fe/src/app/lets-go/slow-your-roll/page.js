import Page from "@/lib/page";
import Util from "@/lib/util";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm type="Party" />
    </>
  );
};

export default Page.for("/lets-go/slow-your-roll", { footer });

export async function generateMetadata() {
  const title = "😌 Relax, we'll get there";
  return await Util.generateMetadata({ title });
}
