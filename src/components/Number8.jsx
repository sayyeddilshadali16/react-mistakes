//Information can be derived from states/ props

import React, { useState } from "react";

const PRICE_PER_ITEM = 5;

const Number8 = () => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * PRICE_PER_ITEM;

  const handleCart = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <button onClick={handleCart} className="bg-sky-500 px-4 py-2 rounded-md">
        Add 1 item
      </button>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Number8;
