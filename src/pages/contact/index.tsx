import ContactForm from "@/components/ContactForm";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Premier Estates</title>
      </Head>
      <div>
        <ContactForm />
      </div>{" "}
    </>
  );
};

export default ContactPage;
