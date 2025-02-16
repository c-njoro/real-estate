import { BooleanStateProvider } from "@/components/GlobalContext";
import { prefetchProperties } from "@/components/hooks/prefetchUtil";
import Structure from "@/components/Structure";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

if (typeof window !== "undefined") {
  prefetchProperties(queryClient).catch(console.error);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Premier Estates"
        defaultTitle="Premier Estates - Luxury Real Estate"
        description="Discover luxury properties and exclusive real estate listings with Premier Estates. Find your dream home today."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://real-estate-iota-teal.vercel.app/",
          siteName: "Premier Estates",
          images: [
            {
              url: "https://real-estate-iota-teal.vercel.app/companylogo.png",
              width: 1200,
              height: 630,
              alt: "Premier Estates",
            },
          ],
        }}
        twitter={{
          handle: "@njoro4_",
          site: "@njoro4_",
          cardType: "summary_large_image",
        }}
      />

      <QueryClientProvider client={queryClient}>
        <BooleanStateProvider>
          <Structure>
            <Component {...pageProps} />
          </Structure>
        </BooleanStateProvider>
      </QueryClientProvider>
    </>
  );
}
