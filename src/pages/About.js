import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import React from "react";

function About() {
    return (
                <div id="About" className="container-fluid mt-5 p-4 min-h-screen">
        <h2 className="h1 text-center"><span className="glow">About</span></h2>
      <div className="container-fluid p-4">
        <br /><br />
        <dl className="row">
          <dt className="depth col-sm-3">Background</dt>
          <dd className="col-sm-9 depth text-justify">I AM A B.TECH STUDENT AND I AM PASIONATE ABOUT COMPUTER.
            I LOVE COLABORATING AND MAKING CONNECTIONS. 
            I AM ALWAYS OPEN TO CHATTING ABOUT TECHNOLOGY AND WOULD LOVE FOR YOU TO CONNECT WITH ME ON SOCIAL MEDIA. 
            I LOVE TO DISCUSS LATEST TECHNOLOGIES.
            I HAVE GOOD AMOUNT OF KNOWLEDGE OF HTML & CSS. I HAVE EXCELLENT IMAGINATION FOR WEB DESIGNING</dd>
          <dt className="col-sm-3 depth">Personal Information</dt>
          <dd className="col-sm-9">
            <dl className="row">
              <dt className="col-sm-2 depth">Full Name</dt>
              <dd className="col-sm-8 depth">Patel Bhumit K.</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-2 depth">Address</dt>
              <dd className="col-sm-8 depth">Ahmedabad, Gujarat, India</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-2 depth">D.O.B</dt>
              <dd className="col-sm-8 depth">26/02/2003</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-2 depth">Mobile No.</dt>
              <dd className="col-sm-8 depth">+91-6359425736</dd>
            </dl>
            <dl className="row">
              <dt className="col-sm-2 depth">E-mail</dt>
              <dd className="col-sm-8 depth">bhumit667@gmail.com</dd>
            </dl>
          </dd>
          <dt className="col-sm-3 depth">Experience</dt>
          <dd className="col-sm-9">
            <dl className="row">
              <dt className="col-sm-2 depth">Coding Gujju</dt> 
              <dd className="col-sm-2 depth">Position : Intern</dd>
              <dd className="col-sm-3 depth">Duration : 1 month</dd>
            </dl>
          </dd>
          <dt className="col-sm-3 depth">Education</dt>
          <dd className="col-sm-9">
            <dl className="row">
              <dt className="col-sm-4 depth"> Information and Technologies | Bachlor of engineering</dt>
              <dd className="col-sm-8 depth"> College : Aditya Siver Oak Institute Of Technologies</dd>
            </dl>
          </dd>
          <dt className="col-sm-3 depth">Projects</dt>
          <dd className="col-sm-4 depth">Coming Soon...</dd>
        </dl>
          </div>
          <div className="d-flex justify-content-center">
            <Button as={Link}  to={'/Skills'} className="btn button-light button-hover" >Skills</Button>
            </div>       
          </div>
    );
}

export default About;