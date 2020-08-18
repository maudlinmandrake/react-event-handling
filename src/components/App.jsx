import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello!");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {}

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
