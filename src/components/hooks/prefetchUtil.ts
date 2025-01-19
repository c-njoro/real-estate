// utils/prefetch.ts
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const prefetchProperties = async (queryClient: QueryClient) => {
  // Prefetch first page
  await queryClient.prefetchQuery({
    queryKey: ["properties", 1, 10],
    queryFn: async () => {
      const frontendUrl = process.env.NEXT_PUBLIC_BASE_FRONTEND_URL;
      const response = await axios.get(`${frontendUrl}/api/properties`, {
        params: {
          _page: 1,
          _limit: 10,
        },
      });
      return response.data;
    },
  });
};
