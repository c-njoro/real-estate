import AboutUs from "@/components/AboutUs";
import { NextSeo } from "next-seo";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Learn more about premier estates, our vision, mission and our core values. Explore our portfolio of luxury properties. Find apartments, houses, and exclusive estates in prime locations."
        canonical="https://real-estate-iota-teal.vercel.app/about"
      />

      <div>
        <AboutUs />
      </div>
    </>
  );
};

export default AboutPage;
