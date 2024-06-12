import "./App.css";
import useGetChampionData from "./hooks/useGetChampionData";

const App = () => {
  const { fetchGetChampionData } = useGetChampionData();

  return (
    <div>
      <button onClick={fetchGetChampionData}>get Data</button>
    </div>
  );
};

export default App;
