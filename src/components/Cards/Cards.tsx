import styles from "./Cards.module.scss";
import Card from "@components/Card";
import { GetChampionData } from "@hooks/useGetChampionData";

const Cards = ({
  data,
  isLoading,
  isError,
}: {
  data: GetChampionData[] | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {
  if (!data || data.length < 1) {
    return <div className={styles.wrapper}>데이터가 없습니다.</div>;
  }

  if (isLoading) {
    return <div className={styles.wrapper}>로딩 중 ..</div>;
  }

  if (isError) {
    return <div className={styles.wrapper}>오류가 발생했습니다.</div>;
  }

  return (
    <div className={`${styles.wrapper} ${styles.cards}`}>
      {data?.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default Cards;
