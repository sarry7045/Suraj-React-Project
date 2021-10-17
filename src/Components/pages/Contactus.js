import React from "react";
import Footer from "../Footer";
import "../Contactus.css";
// import Flip from "react-reveal/Flip";
// import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

function Contactus() {
  // ('button').click(function(){
  //   ('button').toggleClass('active');
  //   ('.title').toggleClass('active');
  //   ('nav').toggleClass('active');
  // });
  return (
    <>
      <div className="home-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1> Contact Us </h1>
        {/* <p> How Can I Help You</p> */}
      </div>



      <div className="button">
        <Zoom>
          <a href="">Send Message</a>
        </Zoom>
      </div>




      <div className="socialmedia">
        <div className="middle">
          <a className="btn" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn" href="#">
            <i className="fa fa-envelope"></i>
          </a>
          <a className="btn" href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Contactus;
