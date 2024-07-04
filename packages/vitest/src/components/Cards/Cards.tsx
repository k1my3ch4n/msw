import Card from "@components/Card";
import { GetChampionData } from "@hooks/useGetChampionData";

const Cards = ({ data }: { data: GetChampionData[] }) => {
  return (
    <>
      {data?.map((data, index) => {
        return <Card key={index} data={data} />;
      })}
    </>
  );
};

export default Cards;
