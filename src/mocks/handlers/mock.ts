import { rest } from "msw";
import { GET_CHAMPION_DATA_RESPONSE, TFT_CHAMP_URL } from "@fixtures/tft";

export const mockHandler = [
  rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: GET_CHAMPION_DATA_RESPONSE }));
  }),
];

const handlers = [...mockHandler];

export default handlers;
