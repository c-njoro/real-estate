import PropertiesList from "@/components/PropertyList";
import { NextSeo } from "next-seo";

const Properties = () => {
  return (
    <>
      <NextSeo
        title="Properties"
        description="Explore our portfolio of luxury properties. Find apartments, houses, and exclusive estates in prime locations."
        canonical="https://real-estate-iota-teal.vercel.app/properties"
      />

      <div>
        <div>
          <PropertiesList />
        </div>
      </div>
    </>
  );
};

export default Properties;
