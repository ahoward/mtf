import Page from "@/lib/page";
import Util from "@/lib/util";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm type="3-way" />
    </>
  );
};

export default Page.for("/lets-go/3-way", { footer });

export async function generateMetadata() {
  const title = "We know you're a busy 🦫, but there's still time to 🎉";
  return await Util.generateMetadata({ title });
}
