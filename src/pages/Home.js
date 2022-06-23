import React from "react";
import avatar from "./../images/DSC_6764.jpg"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function Home() {
    return (
          <div id="Home" className="container-fluid p-2 min-h-screen">
          <main className="text-center container-fluid d-inline-flex justify-content-around">
            <div style={{ marginTop: "5rem"}}>
              <img src={avatar} className="img-fluid img-glow border border-dark rounded-circle" style={{ width: "150px", height: "150px" }}/>
              <br/><br/> 
              <h3> Hi There! </h3>
              <h2 className="fw-bold"> I'M <span className="glow">BHUMIT PATEL</span></h2>
              <h3> Web Developer | Game Developer | Web Designer</h3>
              <br/>
              <div className="spinner-grow spinner-grow-sm m-4" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </main>
          <br /><hr className="mx-5 mt-5" />
          <div>
            <ul className="nav justify-content-around m-4">
            <li><a href="https://github.com/patel-bhumit" className="nav-item btn button-hover text-light m-2">Github</a></li>
            <li><a href="https://instagram.com/bhumit._.patel._.667?r=nametag" className="nav-item btn button-hover text-light m-2">Instragram</a></li>
            <li><a href="https://www.linkedin.com/in/bhumit-patel-71a818215" className="nav-item btn button-hover text-light m-2">LinkedIn</a></li>
            <li><a href="https://twitter.com/BhumitP59901187" className="nav-item btn button-hover text-light m-2">Twitter</a></li>
            <li><a href="https://stackoverflow.com/users/19044008/bhumit-patel" className="nav-item btn button-hover text-light m-2">StackOverflow</a></li>
            <li><a href="https://www.facebook.com/bhumit.patel.667" className="nav-item btn button-hover text-light m-2">Facebook</a></li>
            </ul>
          </div>
          <div className="d-flex justify-content-center m-4">
            <Button as={Link}  to={'About'} className="btn button-light button-hover" >Learn More</Button></div>
        </div>
    );
}

export default Home;
