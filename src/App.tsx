import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("/fake")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  console.log("data : ", data);

  return <div>{data}</div>;
};

export default App;
