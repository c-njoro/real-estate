import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProperties = async (page, limit) => {
  const frontendUrl = process.env.NEXT_PUBLIC_BASE_FRONTEND_URL;
  const response = await axios.get(`${frontendUrl}/api/properties`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  return response.data;
};

const useProperties = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["properties", page, limit],
    queryFn: () => fetchProperties(page, limit),
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache remains for 10 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useProperties;
