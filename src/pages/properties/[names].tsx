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
  const res = await fetch(`${productsUrl}`, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });
  const products = await res.json();

  const allPaths = products.map((pr: Property) => ({
    params: {
      names: pr.name, // Use "names" here
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const productsUrl = process.env.NEXT_PUBLIC_PROPERTIES_URL;
  const name = context.params.names; // Use "names" here
  const res = await fetch(`${productsUrl}`, {
    headers: {
      Accept: "application/json",
      "ngrok-skip-browser-warning": "true",
    },
  });
  const products = await res.json();
  const currentData = products.find((pr: Property) => pr.name === name);

  if (!currentData) {
    return { notFound: true };
  }

  return { props: { currentData } };
}
