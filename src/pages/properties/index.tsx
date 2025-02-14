import PropertiesList from "@/components/PropertyList";
import Head from "next/head";

const Properties = () => {
  return (
    <>
      <Head>
        <title>Properties - Premier Estates</title>
      </Head>
      <div>
        <div>
          <PropertiesList />
        </div>
      </div>
    </>
  );
};

export default Properties;
