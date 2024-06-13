import styles from "./App.module.scss";
import "./App.css";
import Button from "@components/Button";
import useGetChampionData from "@hooks/useGetChampionData";
import Card from "@components/Card";

const App = () => {
  const { data, fetchGetChampionData } = useGetChampionData();

  console.log(data);

  return (
    <div>
      <Button onClick={fetchGetChampionData}>챔피언 데이터</Button>

      <div className={styles.cards}>
        {data?.map((data) => {
          return <Card data={data} />;
        })}
      </div>
    </div>
  );
};

export default App;
