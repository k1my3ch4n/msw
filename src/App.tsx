import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch(
      // "https://ddragon.leagueoflegends.com/cdn/14.11.1/data/ko_KR/champion.json"
      "https://ddragon.leagueoflegends.com/cdn/14.11.1/data/ko_KR/tft-champion.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  return <div>msw</div>;
};

export default App;
