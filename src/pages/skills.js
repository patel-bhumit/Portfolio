import React from "react";
import html from "./../icons/html5.svg"
import css from "./../icons/css3.svg"
import react from "./../icons/react.svg"
import unity from "./../icons/unity.svg"
import python from "./../icons/python.svg"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"

function Skills() {
    return (
      <div id="Skills" className="container-fluid mt-5 p-4 min-h-screen">
      <h2 className="h1 text-center"><span className="glow">Skills</span></h2>
      <div className="d-flex flex-wrap justify-content-around m-2 md-3">
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">HTML</h5>
          <img src={html} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Hyper Text Markup Language</h6>
          <p className="card-text">HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">CSS</h5>
          <img src={css} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Cascading Style Sheet</h6>
          <p className="card-text">CSS is a design language which is used to style HTML elements.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">React.js</h5>
          <img src={react} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Framework</h6>
          <p className="card-text">ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components.</p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">Python</h5>
          <img src={python} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Programing Language</h6>
          <p className="card-text">Python is an object-oriented programming language </p>
        </div>
      </div>
      <div className="card secondary-background m-3" style={{width: "18rem"}}>
        <div className="card-body text-center">
          <h5 className="card-title">Unity</h5>
          <img src={unity} alt="HTML logo" />
          <h6 className="card-subtitle mb-2 text-muted">Game Engin</h6>
          <p className="card-text">Unity is a cross-platform game engine initially released by Unity Technologie.</p>
        </div>
      </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
            <Button as={Link}  to={'/'} className="btn button-light button-hover" >Return Home</Button></div>
    </div> 
    );
}

export default Skills;