import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [counter, setCounter] = useState("");
  const [controller, setController] = useState(false);
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const value = event.target.value;
      if (isNaN(value)) {
        setCounter(0);
        return;
      }
      setCounter(Math.floor(value));
      setController(true);
    }
  };
  const handleInterval = () => {
    if (!controller || counter === 0) {
      return;
    }
    let newCounter = counter - 1;
    setCounter(newCounter);
  };
  useEffect(() => {
    const id = setInterval(handleInterval, 1000);
    return () => {
      clearInterval(id);
    };
  });
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => handleKeyDown(event)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{counter}</div>
    </div>
  );
};

export default App;
