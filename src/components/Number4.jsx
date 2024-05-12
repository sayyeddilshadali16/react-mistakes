//Not using custom hooks

import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setwindowSize] = useState(1920);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setwindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

const Number4 = () => {
  return (
    <div>
      <ExampleComponent1 />
      <ExampleComponent2 />
    </div>
  );
};

const ExampleComponent1 = () => {
  const windowSize = useWindowSize();
  return (
    <div>
      <h1>Component 1</h1>
    </div>
  );
};

const ExampleComponent2 = () => {
  const windowSize = useWindowSize();
  return (
    <div>
      <h1>Component 2</h1>
    </div>
  );
};

export default Number4;
