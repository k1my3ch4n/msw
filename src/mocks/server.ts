import { setupServer } from "msw/node";
// import { http, HttpResponse, DefaultBodyType } from "msw";

import { handlers } from "./handlers";

export const server = setupServer(...handlers);

// export const restMock = ({
//   method,
//   uri,
//   status,
//   body,
// }: {
//   uri: string;
//   status: number;
//   body?: DefaultBodyType;
//   method: keyof typeof http;
// }) => {
//   server.use(
//     http[method](uri, () => {
//       return HttpResponse.json(body, { status });
//     })
//   );
// };
