//Primitives and non-primitives

import React, { useEffect, useState } from "react";

const Number7 = () => {
  console.log("Component rendering...")
  const [price, setPrice] = useState({
    number:100,
    totalPrice: true
  })

  const handleClick = () =>{
    setPrice({
      number:100,
      totalPrice: true
    })
  }

  useEffect(()=>{

  },[price.number])
  return (
    <div>
      <button onClick={handleClick} className="px-4 py-2 rounded-md bg-sky-500">Click Me</button>
    </div>
  );
};

export default Number7;
