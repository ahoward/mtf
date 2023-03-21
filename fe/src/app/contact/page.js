import Page from "@/lib/page";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm />
    </>
  );
};

//export default async function ContactPage() {
//const page = new Page("/contact", { footer });
//return await page.render();
//}
export default Page.for("/contact", { footer });
