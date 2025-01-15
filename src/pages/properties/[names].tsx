import { Property } from "@/components/hooks/Property";

const PropertyPage = ({ currentData }: PropertyPageProps) => {
  return (
    <div className="p-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">{currentData.name}</h1>
      <p className="text-lg  mb-2">{currentData.description}</p>
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

export async function getStaticProps(context: any) {
  const productsUrl = process.env.NEXT_PUBLIC_PROPERTIES_URL;
  const name = context.params.names; // Access the dynamic segment "names"

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
