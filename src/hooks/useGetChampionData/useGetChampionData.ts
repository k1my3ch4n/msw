import axios from "axios";
import { useState } from "react";

export const TFT_CHAMP_URL =
  "https://ddragon.leagueoflegends.com/cdn/14.11.1/data/ko_KR/tft-champion.json";

const TFT_PREFIX = "TFT11";

interface GetChampionData {
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

  const filteredData = Object.keys(data).reduce((acc, key) => {
    if (key.includes(TFT_PREFIX)) {
      acc[key] = data[key];
    }

    return acc;
  }, {} as Record<string, GetChampionData>);

  return filteredData;
};

const useGetChampionData = () => {
  const [data, setData] = useState<Record<string, GetChampionData>>();

  const handleGetChampionData = async () => {
    try {
      const response = await axios.create().get(TFT_CHAMP_URL);

      const { data } = response;

      setData(adapter(data.data));
    } catch (error) {
      console.log("useGetChampData Error : ", error);
    }
  };

  return {
    data,
    handleGetChampionData,
  };
};

export default useGetChampionData;
