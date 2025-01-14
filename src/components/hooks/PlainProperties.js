import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllProperties = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_PROPERTIES_URL}`);
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
