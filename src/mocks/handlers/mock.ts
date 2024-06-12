import { rest } from "msw";
import { TFT_CHAMP_URL } from "../../hooks/useGetChampionData/useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE } from "../../fixtures/tft";

export const mockHandler = [
  rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: GET_CHAMPION_DATA_RESPONSE }));
  }),
];

const handlers = [...mockHandler];

export default handlers;
