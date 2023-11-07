import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
function Tenth() {
  gsap.registerPlugin(ScrollTrigger);

  const purpleArrow = gsap.timeline();

  purpleArrow.fromTo(
    ".purplea",
    { x: -380, duration: 2, ease: "linear" },
    { x: 0, duration: 2, ease: "linear" }
  );

  ScrollTrigger.create({
    animation: purpleArrow,
    trigger: ".paragraphCall",
    start: "top 10%",
    bottom: "bottom 25%",
    // markers: true,
  });
  return (
    <section>
      <div className="tenthSection">
        <img src="greencrash.jpg" alt="greencrash" />
        <h1>Crash Detection calls for help when you can’t.</h1>
      </div>
      <div className="staticCall">
        <div className="imageCall">
          <img src="emergency.jpg" alt="phone" />
        </div>
        <div className="paragraphCall">
          <h3>
            iPhone 14 Pro can detect a severe car crash, then call emergency
            services and notify your emergency contacts.<sup>4</sup>
          </h3>
        </div>
      </div>
      <div className="callarrow">
        <div className="arrowtrials">
          <div className="fortys">
            <ul className="textTrails">
              <li>
                {" "}
                 See how the tech in{" "}
                <br />
                iPhone 14 Pro recognises
                <br />
                a severe car crash 
              </li>
            </ul>
          </div>

          <div className="arrowClasss purplea">
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

export default Tenth;
