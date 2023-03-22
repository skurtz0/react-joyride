import React from "react";
import ReactJoyride from "react-joyride";

const steps = [
  {
    target: ".first",
    content: "first",
  },
  {
    target: ".second",
    content: "second",
  },
  {
    target: ".third",
    content: "third",
  },
];

function App() {
  return (
    <>
      <ReactJoyride continuous={true} steps={steps} />
      <div className="first">Bla bla bla</div>
      <div className="second">Bla bla bla</div>
      <div className="third">Bla bla bla</div>
    </>
  );
}

export default App;
