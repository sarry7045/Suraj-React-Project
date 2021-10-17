import React from "react";
import Footer from "../Footer";
import "../Home.css";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from "react-bootstrap";

import Nature from "../Images/img-1.jpg";
import Nature1 from "../Images/img-2.jpg";
import Nature2 from "../Images/img-8.jpg";

function Home() {
  return (
    <>
      <div className="home-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1> Welcome </h1>
        <p> How Can I Help You</p>
      </div>




      <div className="distortion-effect">
        <h2>
          <span>P</span>articles Di<span>st</span>ortion Eff<span>ec</span>ts
        </h2>
      </div>




      <div className="hover-card">
        {/* <div className="col-sm-4 py-3"> */}
        <div className="card1">
          <img
            style={{ width: "100%", height: "100%" }}
            src={Nature}
          />
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
        {/* </div> */}
        {/* <div className="col-sm-4 py-3"> */}
        <div className="card1">
          <img src={Nature1} />
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
        {/* </div> */}
        {/* <div className="col-sm-4 py-3"> */}
        <div className="card1">
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
        {/* </div> */}
      </div>




       <div className="container2">
        <h1
          style={{
            paddingTop: "4%",
            textAlign: "center",
            color: "white",
            fontSize: "50px",
          }}
        >
          <strong style={{color:"black", fontSize:"2.5rem"}}>What We Do </strong>
        </h1>
        <Fade big>
          <section
            style={{ textAlign: "center", paddingTop: "6%", color: "white" }}
          >
            <div className="content">
              <h2>
                Section one text block Reveal Text Block Reveal on Page Scroll
              </h2>
              <h3>
                {" "}
                Text Block Reveal on Page Scroll Section one text block Reveal
              </h3>
              {/* <p>
                Section one text block Reveal, Text Block Reveal on Page Scroll,
                Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll, Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll, Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,Section one text block Reveal, Text Block Reveal on Page
                Scroll,
              </p> */}
            </div>
          </section>
        </Fade>
        </div>




      {/* <div className="container3">
        <div className="trial-container">
          <div className="item item-1">
            <pre> Hello World</pre>
          </div>
          <div className="item item-2">
            <pre> Hello World </pre>
          </div>
          <div className="item item-3">
            <pre> Hello World </pre>
          </div>
          <div className="item item-4"></div>
          <div className="item item-5"></div>
          <div className="item item-6"></div>
          <div className="item item-7"></div>
          <div className="item item-8"></div>
          <div className="item item-9">9</div>
        </div>
      </div> */}




      {/* <div className="container4"><section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Know about us</h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
      </section>
      </div> */}




      <div className="hover-effect">
        <div className="all">
          <div className="lefter">
            <div className="text">Digitel Marketing</div>
          </div>
          <div className="left">
            <div className="text">Frontend Developer</div>
          </div>
          <div className="center">
            <div className="explainer">
              <span>Meet Our Team</span>
            </div>
            <div className="text">Founder</div>
          </div>
          <div className="right">
            <div className="text">Backend Developer</div>
          </div>
          <div className="righter">
            <div className="text">Operations Coordinator</div>
          </div>
        </div>




        {/* <a
          href="https://www.ixarrobotic.com/#/"
          target="_blank"
          className="ref"
        >
          @ ABC COMPANY{" "}
        </a> */}
      </div>

      <Footer />
    </>
  );
}
export default Home;
