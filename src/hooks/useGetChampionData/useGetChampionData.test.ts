import { renderHook, act } from "@testing-library/react-hooks";

import useGetChampionData, { adapter } from "./useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE } from "../../fixtures/tft";

const renderUseGetChampionData = () => {
  return renderHook(useGetChampionData);
};

describe("useGetChampionData", () => {
  it("fetchGetChampionData 가 실행되면 , data 를 갱신한다.", async () => {
    const { result } = renderUseGetChampionData();

    expect(result.current.data).toBeUndefined();

    await act(async () => {
      await result.current.fetchGetChampionData();
    });

    expect(result.current.data).toEqual(adapter(GET_CHAMPION_DATA_RESPONSE));
  });
});
