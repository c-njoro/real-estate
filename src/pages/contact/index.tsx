import ContactForm from "@/components/ContactForm";
import { NextSeo } from "next-seo";

const ContactPage = () => {
  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Contact us at Premier Estates to ask a question or inquire about a property. Explore our portfolio of luxury properties. Find apartments, houses, and exclusive estates in prime locations."
        canonical="https://real-estate-iota-teal.vercel.app/contact"
      />
      <div>
        <ContactForm />
      </div>{" "}
    </>
  );
};

export default ContactPage;
