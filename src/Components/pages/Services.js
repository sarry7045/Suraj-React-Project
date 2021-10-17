import React from "react";
import Footer from "../Footer";
import "../Services.css";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
// import { Container, Row, Col } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "@material-ui/core";

import Nature from "../Images/img-1.jpg";
import Nature1 from "../Images/img-2.jpg";
import Nature2 from "../Images/img-8.jpg";


function Services() {
  return (
    <>
      <div className="home-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1> Services </h1>
        {/* <p> How Can I Help You</p> */}
      </div>

      
        

      {/* <div className="hover-card2">
        
        <Container lg={4} style={{textAlign:"center" }}>
        <div className="card2">
          <img src={Nature} />
          <div className="info">
            <h1>SPECTROCHEMICAL ANALYSIS</h1>
            <p>
              loremNostrud consectetur mollit velit in aliqua pariatur
              incididunt occaecat consequat ullamco sunt irure.
            </p>
            <a href="#" className="btnn">
              Read More
            </a>
          </div>
          
        </div>
   
        <div className="card2">
          <img src={Nature1}/>
          <div className="info">
            <h1>SPECTROCHEMICAL ANALYSIS</h1>
            <p>
              loremNostrud consectetur mollit velit in aliqua pariatur
              incididunt occaecat consequat ullamco sunt irure.
            </p>
            <a href="#" className="btnn">
              Read More
            </a>
          </div>
        </div>
       
        
        <div className="card2">
          <img src={Nature2}/>
          <div className="info">
            <h1>SPECTROCHEMICAL ANALYSIS</h1>
            <p>
              loremNostrud consectetur mollit velit in aliqua pariatur
              incididunt occaecat consequat ullamco sunt irure.
            </p>
            <a href="#" className="btnn">
              Read More
            </a>
          </div>
        </div>
        </Container>
       
      </div>
       */}
      
      
      
      
      {/* <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <img src="Images/img-2.jpg" width={400} />
          </div>
          <div className="col-md-4">
            <img src="Images/img-2.jpg" width={400} />
          </div>
          <div className="col-md-4">
            <img src="Images/img-2.jpg" width={400} />
          </div>
        </div>
      </div> */}
      
      
      
      
      <div className="container5">
        <Container md={12} style={{textAlign:"center" }}>
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        
          <img  src={Nature} alt="apple" width={300} height={220} />
          <img  src={Nature1} alt="apple" width={300} height={220} />
          <img  src={Nature2} alt="apple" width={300} height={220} />
        </Container>
        </div>

      
      <Footer />
    </>
  );
}
export default Services;
