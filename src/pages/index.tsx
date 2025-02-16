import Landing from "@/components/Landing";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Luxury Real Estate & Premium Properties"
        description="Browse our exclusive collection of luxury properties. Premier Estates offers high-end real estate solutions tailored to your needs."
        canonical="https://real-estate-iota-teal.vercel.app/"
      />

      <div className="bg-background text-foreground w-screen">
        <div>
          <Landing />
        </div>
      </div>
    </>
  );
};

export default Home;
