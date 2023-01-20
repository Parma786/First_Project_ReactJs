import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("dark");
  let [text, setText] = useState("Enable dark");
  let Toggle = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Enable Dark mode");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      setText("Enable Light mode");
      document.body.style.backgroundColor = "grey";
    }
  };
  return (
    <>
      {/* <Navbar
        mode={mode}
        func={Toggle}
        text={text}
      />
      <About /> */}

      <Router>
        <Navbar mode={mode} func={Toggle} text={text} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textform heading="Text Area" mode={mode} />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
