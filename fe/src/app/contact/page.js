import Page from "@/lib/page";
import Util from "@/lib/util";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm />
    </>
  );
};

export default Page.for("/contact", { footer });

export async function generateMetadata() {
  const title = "Contact High";
  return await Util.generateMetadata({ title });
}
