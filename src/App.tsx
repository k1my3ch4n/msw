import "./App.css";
import useGetChampionData from "./hooks/useGetChampionData";

const App = () => {
  const { handleGetChampionData } = useGetChampionData();

  return (
    <div>
      <button onClick={handleGetChampionData}>get Data</button>
    </div>
  );
};

export default App;
