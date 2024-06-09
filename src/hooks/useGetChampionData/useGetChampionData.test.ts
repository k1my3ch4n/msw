import { renderHook } from "@testing-library/react-hooks";
import useGetChampionData from "./useGetChampionData";

const renderUseGetChampionData = () => {
  return renderHook(() => useGetChampionData());
};

describe("useGetChampionData", () => {
  it("결과 값을 반환한다.", () => {
    const { result } = renderUseGetChampionData();

    expect(result.current).toBeDefined();
  });
});
