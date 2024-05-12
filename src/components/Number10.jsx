// Updating object state

import React, { useState } from "react";

const Number10 = () => {
  const [user, setUser] = useState({
    name: "",
    city: "",
    age: 22,
  });
  console.log(user);

  //   const handleChange = (e) => {
  //     setUser({
  //       ...user,
  //       name: e.target.value,
  //     });
  //   };

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="outline-none bg-zinc-300 p-2 rounded-lg text-black m-10"
        placeholder="Enter something"
      />
    </div>
  );
};

export default Number10;
