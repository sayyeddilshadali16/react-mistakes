//Typescript mistakes

//Typescript shows mistakes on hovering the variable (example: in useState whatever value is assigned cannot be change on rendering, assigned value must same after the rendering like const [text, setText] = useState(''){here it is string, and after use it must be string too})

import React, { useEffect, useState } from "react";

//Also we can assign custom type

// type About = {
//   name: "",
//   designation: "",
// };

const Number5 = () => {
  // const [name, setName] = useState < About|null > (null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      }, []);
  });
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

export default Number5;
