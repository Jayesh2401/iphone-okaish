import React, { useState } from "react";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function Twelveth() {
  const [backgroundPosition, setBackgroundPosition] = useState("0px 0px");

  const zoomTimeline = gsap.timeline();

  zoomTimeline.fromTo(
    ".zoomElement",
    { 
      x: 1,
      y: 1,
    },
    { x: 80, y: 80 }
  );  

  ScrollTrigger.create({
    animation:zoomTimeline,
    trigger:".zoomdiv",
    start:"top 100%",
    end:"bottom 70%",
    scrub:true,
    // markers:true

  })

  const handleMouseMove = (event) => {
    console.log(event);
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  useEffect(() => {
    // handleMouseMove
  }, []);

  return (
    <div className="twelvethSection">
      <div className="twelveContainer">
        <h3>
          Up to 4x <br /> the resolution.
          <br /> For jaw-dropping <br /> cropping.
        </h3>
      </div>
      <div className="zoomcanvaSection">
        <div className="zoomdiv" onClick={handleMouseMove}>
          <img src="zomtree.jpg" alt="tree" />
          <div className="zoomElement"></div>
        </div>
        <div
          className="zoomedPortion"
          style={{
            // backgroundImage: `url("/public/zoomtree.jpg")`,
            backgroundSize: "793px auto",

            backgroundPosition,
          }}
        ></div>
      </div>
      <div className="twelvePara">
        <h3>
          iPhone 14 Pro raises the bar for what 48 megapixels can do —
          delivering 4x the resolution in ProRAW for mind-blowing detail in
          every crop.
        </h3>
        <h2>65% larger sensor</h2>
        <p>than iPhone 13 Pro</p>
      </div>
      <div className="callarrow">
        <div className="arrowtrials">
          <div className="fortys">
            <ul className="textTrails">
              <li>
                {" "}
                See how iPhone <br />
                does more with <br />
                every megapixel
              </li>
            </ul>
          </div>

          <div className="arrowClasss purplea animateArrow ">
            <svg
              className="deep-dive-button-image-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 63 63"
            >
              <path
                className="arrow"
                d="M45.79,32.24l0,.12s0,.1,0,.14a.91.91,0,0,1-.07.14.53.53,0,0,1-.06.1,1.2,1.2,0,0,1-.17.21l-9.59,9.6a1.4,1.4,0,0,1-2,0,1.38,1.38,0,0,1,0-2l7.21-7.22H20a1.39,1.39,0,1,1,0-2.78H41.06l-7.21-7.22a1.38,1.38,0,0,1,0-2,1.4,1.4,0,0,1,2,0L45.41,31a1.84,1.84,0,0,1,.17.22.53.53,0,0,1,.06.1.91.91,0,0,1,.07.14s0,.09,0,.14,0,.07,0,.12a1.23,1.23,0,0,1,0,.54Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twelveth;
