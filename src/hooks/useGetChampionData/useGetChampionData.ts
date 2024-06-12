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

  const filteredChampionData = Object.keys(data).reduce((acc, key) => {
    if (key.includes(TFT_PREFIX)) {
      acc[key] = data[key];
    }

    return acc;
  }, {} as Record<string, GetChampionData>);

  return filteredChampionData;
};

const useGetChampionData = () => {
  const [dataChampionData, setChampionData] =
    useState<Record<string, GetChampionData>>();

  const fetchGetChampionData = async () => {
    try {
      const response = await axios.create().get(TFT_CHAMP_URL);

      const { data } = response;

      setChampionData(adapter(data.data));
    } catch (error) {
      console.error("useGetChampData Error : ", error);
    }
  };

  return {
    data: dataChampionData,
    fetchGetChampionData,
  };
};

export default useGetChampionData;
