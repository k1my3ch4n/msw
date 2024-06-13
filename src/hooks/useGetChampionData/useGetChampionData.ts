import { TFT_CHAMP_URL } from "@fixtures/tft";
import axios from "axios";
import { useState } from "react";

const TFT_PREFIX = "TFT11";

export interface GetChampionData {
  id: string;
  image: {
    full: string;
    group: string;
    sprite: string;
    h: number;
    w: number;
    x: number;
    y: number;
  };
  name: string;
  tier: number;
}

export const adapter = (data: Record<string, GetChampionData>) => {
  if (!data) {
    return;
  }

  const filteredChampionData = Object.values(data).filter(({ id }) =>
    id.includes(TFT_PREFIX)
  );

  return filteredChampionData;
};

const useGetChampionData = () => {
  const [dataChampionData, setChampionData] = useState<GetChampionData[]>();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchGetChampionData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await axios.create().get(TFT_CHAMP_URL);

      const { data } = response;

      setChampionData(adapter(data.data));
    } catch (error) {
      setIsError(true);
      console.error("useGetChampData Error : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data: dataChampionData,
    isLoading,
    isError,
    fetchGetChampionData,
  };
};

export default useGetChampionData;
