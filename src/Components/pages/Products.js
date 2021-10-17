import React from "react";
import Footer from "../Footer";
import "../Products.css";
import Flip from "react-reveal/Flip";
import Robot from "../Images/robot.png";

function Products() {
  return (
    <>
     <div className="home-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1> Products </h1>
        <p> </p>
      </div>




      <div className="hover-card3">
        <Flip top>
          <div className="card3">
            <div class="content">
              <h2>Click Me</h2>
              <p>
                Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll
              </p>
              <a href="" target="_Suraj">
                Read More
              </a>
            </div>
            <img
              style={{
                height: "85%",
                width: "40%",
                paddingTop: "13%",
                paddingLeft: "18%",
              }}
              src={Robot}
              alt="Image"
            ></img>
          </div>
        </Flip>
      </div>

      <Footer />
    </>
  );
}
export default Products;
