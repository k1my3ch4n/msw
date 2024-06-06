import { HttpResponse, http } from "msw";

export const mockHandler = [
  http.get("/fake", () => {
    return HttpResponse.json({
      data: "data1",
    });
  }),
];

const handlers = [...mockHandler];

export default handlers;
