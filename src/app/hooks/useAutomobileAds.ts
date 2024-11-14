import { useQuery } from "@tanstack/react-query";
import { AUTOMOBILE_AD_GETT_ALL } from "../api/apiRoutes";

export const useAutomobileAds = (page: number = 0, pageSize: number = 25) => {
  return useQuery({
    queryKey: ["automobileAds", page, pageSize],
    queryFn: async () => {
      const response = await fetch(AUTOMOBILE_AD_GETT_ALL(page, pageSize));
      if (!response.ok) {
        throw new Error("Failed to fetch automobile ads");
      }
      const result = await response.json();
      return result.data;
    },
  });
};
