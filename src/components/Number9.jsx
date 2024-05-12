// Object state instead of multiple smaller ones

import React, { useState } from "react";

const Number9 = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    zipcode: "",
  });

  //Normal function

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Updater function (previous value)

  // const handleChange = (e) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div>
      <form action="" className="flex flex-col gap-5 text-black">
        <input
          onChange={handleChange}
          type="text"
          name="firstname"
          placeholder="First name"
          className="px-4 py-2"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastname"
          placeholder="Last name"
          className="px-4 py-2"
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          className="px-4 py-2"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="px-4 py-2"
        />
        <input
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="Address"
          className="px-4 py-2"
        />
        <input
          onChange={handleChange}
          type="text"
          name="zipcode"
          placeholder="Zip code"
          className="px-4 py-2"
        />
        <button className="px-4 py-2 bg-sky-500 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Number9;
