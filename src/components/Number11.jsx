// Conditional Rendering

import React, { useEffect, useState } from "react";

const Number11 = ({ id }) => {
  const [something, setSomething] = useState("Nope");
  useEffect(() => {}, [something]);
  return (
    <div>
      {!id
        ? "No id provied"
        : {
            // Product card
          }}
    </div>
  );
};

export default Number11;
