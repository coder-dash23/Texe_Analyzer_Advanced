import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpcase = () => {
    //   console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLocase = () => {
    //   console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from your text", "success");
  };

  const handleonChange = (event) => {
    //   console.log("on change")
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Enter our text to Analyze:</h1>

        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1e2b25" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border: "3px solid black",
            }}
            id="myBox"
            rows="10"
            cols="173"
          ></textarea>
        </div>
        <div className="button">
          <button
            disabled={text.length === 0}
            className="btn btn-primary me-2"
            onClick={handleUpcase}
          >
            Convert to Upper Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary me-2"
            onClick={handleLocase}
          >
            Convert to Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary me-2"
            onClick={ClearText}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary me-2"
            onClick={handleCopy}
          >
            {" "}
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary me-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div
        className="box my-3 m-lg-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <h6>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </h6>
        <h6>{0.0032 * 60 * text.length} Seconds to read</h6>
      </div>
      <hr style={{ color: props.mode === "dark" ? "white" : "black" }} />
      <div
        className="preview m-lg-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Preview :</h2>
        <h6>
          {text.length > 0 ? text: "Enter Something in the Textbox Above to Preview it here!!!!"}
        </h6>
      </div>
    </>
  );
}
