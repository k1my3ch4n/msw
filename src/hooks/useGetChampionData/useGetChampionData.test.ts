import { renderHook } from "@testing-library/react-hooks";
import { act } from "react";
import useGetChampionData, { adapter } from "./useGetChampionData";
import { GET_CHAMPION_DATA_RESPONSE } from "../../fixtures/tft";

const renderUseGetChampionData = () => {
  return renderHook(useGetChampionData);
};

describe("useGetChampionData", () => {
  it("결과 값을 반환한다.", async () => {
    const { result, waitForNextUpdate } = renderUseGetChampionData();

    act(() => result.current.handleGetChampionData());

    await waitForNextUpdate();

    expect(result.current.data).toEqual(adapter(GET_CHAMPION_DATA_RESPONSE));
  });
});
