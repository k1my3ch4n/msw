import styles from "./App.module.scss";
import Cards from "@components/Cards";
import Button from "@components/Button";
import useGetChampionData from "@hooks/useGetChampionData";

const App = () => {
  const { data, isLoading, isError, fetchGetChampionData } =
    useGetChampionData();

  return (
    <div>
      <Button onClick={fetchGetChampionData}>챔피언 데이터</Button>
      <div className={`${styles.wrapper} ${data ? styles.hasData : ""}`}>
        {isLoading && <p>로딩 중..</p>}
        {isError && <p>오류가 발생했습니다.</p>}
        {!isLoading && !isError && !data && <p>데이터가 없습니다.</p>}
        {data && <Cards data={data} />}
      </div>
    </div>
  );
};

export default App;
