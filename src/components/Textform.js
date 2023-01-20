import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter your Text");
  const func = (event) => {
    setText(event.target.value);
  };
  const func2 = () => {
    let newstate = text.toUpperCase();
    setText(newstate);
  };
  const func3 = () => {
    let newState = text.toLowerCase();
    setText(newState);
  };
  const clear = () => {
    setText(" ");
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1
            className={`my-3 text-${props.mode === "light" ? "dark" : "white"}`}
          >
            {" "}
            {props.heading}{" "}
          </h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={func}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={func2}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={func3}
          >
            LowerCase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={clear}
          >
            ClearText
          </button>
        </div>
        <div className="container my-3 ">
          <h1> Text Summary</h1>
          <p className="border border-dark">
            You wrote {text.split(" ").length} words and {text.length}{" "}
            characters{" "}
          </p>
        </div>
      </div>
    </>
  );
}
