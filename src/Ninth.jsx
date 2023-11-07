import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Ninth() {
  gsap.registerPlugin(ScrollTrigger);

  const orangeArrow = gsap.timeline();

  orangeArrow.fromTo(
    ".pp",
    { x: -380, duration: 2, ease: "linear" },
    { x: 0, duration: 2, ease: "linear" }
  );

  ScrollTrigger.create({
    animation: orangeArrow,
    trigger: ".orangePic",
    start: "top 10%",
    bottom: "bottom 25%",
    // markers: true,
  });

  return (
    <section>
      <div className="ninthSection">
        <div className="paragraphSectiopnnine">
          <h2>A display that’s up to 2x brighter in the sun.</h2>
          <p>Brilliant.</p>
        </div>
        <div className="orangePic">
          <img src="orangeimg.jpg" alt="phone" />
        </div>
        {/* <div>
          <h4>See why the new Super Retina XDR display is like nothing else</h4>
          
        </div> */}

        <div className="arrowtrials">
          <div className="fortys">
            <ul className="textTrails">
              <li>
                {" "}
                See why the new <br />
                Super Retina XDR display
                <br />
                is like nothing else
              </li>
            </ul>
          </div>

          <div className="arrowClasss pp">
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
    </section>
  );
}

export default Ninth;
