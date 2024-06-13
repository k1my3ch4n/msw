import Cards from "@components/Cards";
import Button from "@components/Button";
import useGetChampionData from "@hooks/useGetChampionData";

const App = () => {
  const { data, isLoading, isError, fetchGetChampionData } =
    useGetChampionData();

  return (
    <div>
      <Button onClick={fetchGetChampionData}>챔피언 데이터</Button>
      <Cards data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default App;
