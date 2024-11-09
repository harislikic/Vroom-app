const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const AUTOMOBILE_AD_GETT_ALL = (
  page: number = 0,
  pageSize: number = 25
) => `${BASE_URL}/AutomobileAd?Page=${page}&PageSize=${pageSize}`;