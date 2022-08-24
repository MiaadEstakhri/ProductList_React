import { useState } from "react";
import style from "./array.module.css"
const ArrayHook = () => {
  const [random, setRandom] = useState([]);

  const randomNumber = () => {
    const addRandom = {
      id: random.length,
      number: Math.floor(Math.random() * 10),
    };
    const updateRandom = [...random, addRandom];
    setRandom(updateRandom);
  };
  return (
    <div className={style.random}>
      <button onClick={randomNumber}>random</button>
      {random.map((e) => {
        return <li key={e.id}>{e.number}</li>;
      })}
    </div>
  );
};

export default ArrayHook;
