import { HttpResponse, http } from "msw";
import { TFT_CHAMP_URL } from "../../hooks/useGetChampionData/useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE } from "../../fixtures/tft";

export const mockHandler = [
  http.get("/fake", () => {
    return HttpResponse.json({
      data: "data1",
    });
  }),

  http.get(TFT_CHAMP_URL, () => {
    return HttpResponse.json(GET_CHAMPION_DATA_RESPONSE);
  }),
];

const handlers = [...mockHandler];

export default handlers;
