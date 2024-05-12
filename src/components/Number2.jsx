//Stale closures

import React, { useEffect, useState } from "react";

const Number2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Count is: {count}</h1>
    </div>
  );
};

export default Number2;
