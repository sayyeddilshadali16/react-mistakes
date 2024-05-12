// State updates aren't immediate

import React, { useState } from "react";

const Number12 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div className="p-10">
      <button
        onClick={handleClick}
        className="bg-sky-500 px-4 py-2 rounded-md font-semibold"
      >
        Click
      </button>
      <p className="mt-10 ml-5 font-semibold text-2xl">{count}</p>
    </div>
  );
};

export default Number12;
