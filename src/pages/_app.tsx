import { BooleanStateProvider } from "@/components/GlobalContext";
import { prefetchProperties } from "@/components/hooks/prefetchUtil";
import Structure from "@/components/Structure";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

if (typeof window !== "undefined") {
  // Only run on client
  prefetchProperties(queryClient).catch(console.error);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BooleanStateProvider>
        <Structure>
          <Component {...pageProps} />
        </Structure>
      </BooleanStateProvider>
    </QueryClientProvider>
  );
}
