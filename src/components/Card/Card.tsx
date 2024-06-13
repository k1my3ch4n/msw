import styles from "./Card.module.scss";
import { GetChampionData } from "@hooks/useGetChampionData";

const COLOR_MAP = ["gray", "green", "blue", "pink", "orange"];

const Card = ({ data }: { data: GetChampionData }) => {
  const { name, tier } = data;

  const commonStyle = `${styles[COLOR_MAP[tier - 1]]}`;

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
