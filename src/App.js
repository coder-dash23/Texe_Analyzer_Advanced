import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 1500);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.title = "TextAnalyzer(Dark Mode)";
      document.body.style.backgroundColor = "#060629";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.title = "TextAnalyzer(Light Mode)";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
