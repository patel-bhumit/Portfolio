import React from "react";
import avatar from "./../images/DSC_6764.jpg"

function Home() {
    return (
        <React.Fragment>
          <div id="Home" className="container-fluid p-4">
          <main className="text-center container-fluid d-inline-flex justify-content-around">
            <div style={{ marginTop: "5rem"}}>
              <img src={avatar} className="img-fluid img-glow border border-dark rounded-circle" style={{ width: "150px", height: "150px" }}/>
              <br/><br/> 
              <h3> Hi There! </h3>
              <h2 className="fw-bold"> I'M <span className="glow">BHUMIT PATEL</span></h2>
              <h3> Web Developer | Game Developer | Web Designer</h3>
              <br/>
              <a href="#Contact" style={{textdecoration: "none", color: "#12131f"}}><button type="button" className="btn button button-hover">Hire Me</button></a>
              <br/>
              <div className="spinner-grow spinner-grow-sm m-4" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </main>
          <br /><hr className="mx-5 mt-5" />
          <div>
            <ul className="nav justify-content-around m-4">
            <li className="nav-item btn button-hover text-light m-2">Github</li>
            <li className="nav-item btn button-hover text-light m-2">Instragram</li>
            <li className="nav-item btn button-hover text-light m-2">LinkedIn</li>
            <li className="nav-item btn button-hover text-light m-2">Twitter</li>
            <li className="nav-item btn button-hover text-light m-2">StackOverflow</li>
            <li className="nav-item btn button-hover text-light m-2">Facebook</li>
            </ul>
          </div>
        </div>
        </React.Fragment >
    );
}

export default Home;
