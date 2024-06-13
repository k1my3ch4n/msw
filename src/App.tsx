import "./App.css";
import Button from "@components/Button";
import useGetChampionData from "@hooks/useGetChampionData";

const App = () => {
  const { data, fetchGetChampionData } = useGetChampionData();

  console.log(data);

  return (
    <div>
      <Button onClick={fetchGetChampionData}>챔피언 데이터</Button>
    </div>
  );
};

export default App;
