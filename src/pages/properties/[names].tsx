import { Property } from "@/components/hooks/Property";
import Slider from "@/components/Slider";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

const PropertyPage = ({ currentData }: PropertyPageProps) => {
  return (
    <div className="p-6 bg-background text-foreground grid grid-cols-2 gap-12">
      <div>
        <Slider images={currentData.imagePaths} />
      </div>
      <div className="info w-full h-max flex flex-col justify-start items-start p-3 gap-8">
        <div className="name w-full h-max flex flex-row justify-start items-center mb-5">
          <p className="font-semibold font-body text-5xl tracking-wider">
            {currentData.name}
          </p>
        </div>
        <div className="desc w-full h-max flex flex-col justify-start items-start">
          <p className="font-extralight font-body text-sm">
            {currentData.description}
          </p>
        </div>
        <div className="specs w-full h-max">
          <h1 className="font-semibold font-heading text-xl tracking-widest">
            Specifications:{" "}
          </h1>
        </div>
        <div className="location w-full grid grid-cols-1 gap-2 border-b border-t border-background py-1">
          <p className="font-bold font-heading">Location: {currentData.city}</p>
          <p className="font-bold font-heading">
            Address: {currentData.exactAddress}
          </p>
        </div>
        <div className="size w-full grid grid-cols-1 gap-2 border-b  border-background pb-1 text-sm">
          <p className="font-bold font-heading">
            Bedrooms: {currentData.bedrooms}
          </p>
          <p className="font-bold font-heading">
            Bathrooms: {currentData.bathrooms}
          </p>
          <p className="font-bold font-heading">{currentData.size}</p>
        </div>
        <div className="more w-full h-max grid grid-cols-2 gap-2 place-items-center mt-4">
          <Link
            href={`/properties`}
            className="w-full h-max py-2 bg-green-500 text-background font-bold gap-3  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
          >
            <BsWhatsapp />
            <p>Enquire Via Whatsapp</p>
          </Link>
          <Link
            href={`/properties`}
            className="w-full h-max py-2 border-2 border-blue-500 gap-5 text-foreground font-bold  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
          >
            <FaPhone />
            <p>Call now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;

type PropertyPageProps = {
  currentData: Property;
};

export async function getStaticPaths() {
  const productsUrl = process.env.NEXT_PUBLIC_PROPERTIES_URL;

  // Fetch product data
  const res = await fetch(`${productsUrl}`, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  const products = await res.json();

  // Generate paths for pre-rendering
  const allPaths = products.map((pr: Property) => ({
    params: {
      names: pr.name, // Ensure this matches the dynamic segment name in the filename [names].tsx
    },
  }));

  return {
    paths: allPaths, // Pre-render these paths
    fallback: "blocking", // Allow dynamic generation for other paths
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const productsUrl = process.env.NEXT_PUBLIC_PROPERTIES_URL;
  const name = context.params?.names; // Access the dynamic segment "names"

  // Fetch product data
  const res = await fetch(`${productsUrl}`, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });

  const products = await res.json();

  // Find the current product by name
  const currentData = products.find((pr: Property) => pr.name === name);

  // If no data is found, return 404
  if (!currentData) {
    return { notFound: true };
  }

  // Pass the data as props
  return { props: { currentData } };
}
