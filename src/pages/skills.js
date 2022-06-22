import React from "react";
import html from "./../icons/html5.svg"
import css from "./../icons/css3.svg"
import react from "./../icons/react.svg"
import unity from "./../icons/unity.svg"
import python from "./../icons/python.svg"

function Skills() {
    return (
            <div id="Skills" className="container-fluid mt-5 p-4">
      <h2 className="h1 text-center"><span className="glow">Skills</span></h2>
      <div className="d-flex flex-wrap justify-content-around m-2 md-3">
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">HTML</h5>
          <img src={html} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Hyper Text Markup Language</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">CSS</h5>
          <img src={css} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Cascading Style Sheet</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">React.js</h5>
          <img src={react} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Framework</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">Python</h5>
          <img src={python} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Programing Language</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">Unity</h5>
          <img src={unity} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Game Engin</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Skills;