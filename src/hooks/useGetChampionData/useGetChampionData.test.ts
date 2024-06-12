import { renderHook, act } from "@testing-library/react-hooks";
import useGetChampionData, {
  TFT_CHAMP_URL,
  adapter,
} from "./useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE } from "../../fixtures/tft";
import { server } from "../../mocks/server";
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

  it("fetchGetChampionData 가 실패하면 , console error 가 호출된다. ", async () => {
    const mockConsoleError = jest
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
