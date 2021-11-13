import React from "react";

export default function About(props) {
  
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#060629",
    backgroundColor: props.mode === "dark" ? "rgb(27 37 41)" : "white",
  };

  return (
    <div className="Container">
      <h1 className="heading  m-lg-4"style={{ color: props.mode === "dark" ? "white" : "black" }}>About Us</h1><hr />
      <div className="accordion m-lg-3" id="accordionExample ">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Text in Real-time</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Businesses are inundated with information and customer comments
              can appear anywhere on the web these days, but it can be difficult
              to keep an eye on it all. Text analysis is a game-changer when it
              comes to detecting urgent matters, wherever they may appear, 24/7
              and in real time. By training text analysis models to detect
              expressions and sentiments that imply negativity or urgency,
              businesses can automatically flag tweets, reviews, videos,
              tickets, and the like, and take action sooner rather than later.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Analyzer delivers qualitative results and text analytics
              delivers quantitative results. If a machine performs text
              analysis, it identifies important information within the text
              itself, but if it performs text analytics, it reveals patterns
              across thousands of texts, resulting in graphs, reports, tables
              etc. Let's say a customer support manager wants to know how many
              support tickets were solved by individual team members. In this
              instance, they'd use text analytics to create a graph that
              visualizes individual ticket resolution rates. However, it's
              likely that the manager also wants to know which proportion of
              tickets resulted in a positive or negative outcome? By analyzing
              the text within each ticket, and subsequent exchanges, customer
              support managers can see how each agent handled tickets, and
              whether customers were happy with the outcome. Basically, the
              challenge in text analysis is decoding the ambiguity of human
              language, while in text analytics it's detecting patterns and
              trends from the numerical results.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Delivers Consistent Criteria</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Humans make errors. Fact. And the more tedious and time-consuming
              a task is, the more errors they make. By training text analysis
              models to your needs and criteria, algorithms are able to analyze,
              understand, and sort through data much more accurately than humans
              ever could.
            </div>
          </div>
        </div>
      </div>
      <div className="About  m-lg-4 " style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h4>Made by => Adarsh&#128517;</h4>
            <h5>Hope you all loved it&#128512; </h5>
            <h6>Thank You!&#128516;</h6>
       </div>
    </div>

    
  );
}
