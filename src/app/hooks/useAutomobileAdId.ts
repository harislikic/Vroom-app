import { useQuery } from "@tanstack/react-query";
import { AUTOMOBILE_AD_GET_BY_ID } from "../api/apiRoutes";

export const useAutomobileAd = (id: string | string[] | undefined) => {
  return useQuery({
    queryKey: ["automobileAd", id],
    queryFn: async () => {
      if (!id) {
        throw new Error("ID is required to fetch automobile ad.");
      }
      const response = await fetch(AUTOMOBILE_AD_GET_BY_ID(id));
      if (!response.ok) {
        throw new Error("Failed to fetch automobile ad");
      }
      const result = await response.json();
      return result.data;
    },
    enabled: !!id,
  });
};
