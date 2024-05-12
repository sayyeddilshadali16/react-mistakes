//Initializng state with object

import axios from "axios";
import React, { useEffect, useState } from "react";

const Number6 = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/posts/1");
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Number6;

// const fetchProducts = async() =>{
//   const response = await fetch("url")
//   const data = res.json()
//   console.log(data)
// } 

// useEffect(()=>{
//   fetchProducts()
// },[])
