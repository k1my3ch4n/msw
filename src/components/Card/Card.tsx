import styles from "./Card.module.scss";
import { GetChampionData } from "@hooks/useGetChampionData";

const Card = ({ data }: { data: GetChampionData }) => {
  const { name, tier } = data;

  const ddd = ["gray", "green", "blue", "pink", "orange"];

  const commonStyle = `${styles[ddd[tier - 1]]}`;

  return (
    <div className={`${styles.wrapper} ${commonStyle}`}>
      <p>{name}</p>
      <p>
        Cost : <span>{tier}</span> gold
      </p>
    </div>
  );
};

export default Card;
