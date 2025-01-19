// utils/prefetch.ts
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const prefetchProperties = async (queryClient: QueryClient) => {
  const propertiesUrl = process.env.PAGINATED_PROPERTIES_URL;

  // Prefetch first page
  await queryClient.prefetchQuery({
    queryKey: ["properties", 1, 10],
    queryFn: async () => {
      const response = await axios.get(`/api/properties`, {
        params: {
          _page: 1,
          _limit: 10,
        },
      });
      return response.data;
    },
  });
};
