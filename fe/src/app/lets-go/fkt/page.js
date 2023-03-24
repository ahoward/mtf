import Page from "@/lib/page";
import ContactForm from "@/app/forms/contact";

const footer = function () {
  return (
    <>
      <br></br>
      <ContactForm type="FKT" />
    </>
  );
};

export default Page.for("/lets-go/fkt", { footer });
