//Fetching in useEffects

import axios from "axios";
import React, { useEffect, useState } from "react";

const Number1 = () => {
  const [id, setId] = useState(1);
  return (
    <div>
      <button
        onClick={() => setId(Math.floor(Math.random() * 100))}
        className="bg-sky-500 rounded-md px-4 py-2"
      >
        Show me a different post
      </button>
      <PostBody id={id} />
    </div>
  );
};

const PostBody = ({ id }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${id}`);
        setText(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  }, [id]);

  return (
    <div>
      <h1>{loading ? "Loading..." : <p>{text}</p>}</h1>
    </div>
  );
};

export default Number1;
