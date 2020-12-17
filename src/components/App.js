import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [value, setvalue] = useState("");
  const [curTime, setcurrTime] = useState("");
  const handle = (ev) => {
    setvalue(ev.target.value);
    const input = Number(ev.target.value, 10);
    console.log(input);
    if (input) {
      setcurrTime(input);

      // console.log(input);
    } else {
      setcurrTime(0);
    }
  };
  const tick = () => {
    if (curTime) {
      setcurrTime(curTime - 1);
      //   console.log(1);
    }
  };
  useEffect(() => {
    setTimeout(tick, 1000);
    return () => {
      clearTimeout();
    };
  }, [curTime]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" value={value} onChange={handle} /> sec.
        </h1>
      </div>
      <div id="current-time">{curTime}</div>
    </div>
  );
};

export default App;
