import React, { useState } from "react";
const HookCounter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((e) => {
      return e + 1;
    });
  };
  const clickThreeHandler = () => {
    for (let i = 0; i < 3; i++) {
      setCount((e) => {
        return e + 1;
      });
    }
  };
  return (
    <div>
      <h1>count-{count}</h1>
      <button onClick={clickHandler}>click</button>
      <button onClick={clickThreeHandler}>click</button>
    </div>
  );
};

export default HookCounter;
