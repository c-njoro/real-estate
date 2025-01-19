import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import axiosRetry from "axios-retry";

const fetchAllProperties = async () => {
  axiosRetry(axios, { retries: 3 });
  const frontendUrl = process.env.NEXT_PUBLIC_BASE_FRONTEND_URL;
  const response = await axios.get(`${frontendUrl}/api/plainProperties`);
  return response.data;
};

const useAllProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: fetchAllProperties,
    staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache remains for 10 minutes
  });
};

export default useAllProperties;
