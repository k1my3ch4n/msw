import { renderHook, act } from "@testing-library/react";
import useGetChampionData, { adapter } from "./useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE, TFT_CHAMP_URL } from "@fixtures/tft";
import { server } from "@mocks/server";
import { rest } from "msw";

describe("useGetChampionData", () => {
  it("fetchGetChampionData 가 실행되면 , data 를 갱신한다.", async () => {
    const { result } = renderHook(useGetChampionData);

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(result.current.data).toEqual(adapter(GET_CHAMPION_DATA_RESPONSE));
  });

  it("fetchGetChampionData 가 실행 후 data가 없다면 , undefined 가 출력된다.", async () => {
    server.use(
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ data: undefined }));
      })
    );

    const { result } = renderHook(useGetChampionData);

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(result.current.data).toBeUndefined();
  });

  it("fetchGetChampionData 가 실패하면 , console error 가 호출된다. ", async () => {
    const mockConsoleError = vi
      .spyOn(console, "error")
      .mockImplementationOnce(() => undefined);

    server.use(
      rest.get(TFT_CHAMP_URL, (_, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    const { result } = renderHook(useGetChampionData);

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(mockConsoleError).toHaveBeenCalled();
  });
});
