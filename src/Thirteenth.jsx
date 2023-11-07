import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import ScrollDelay from "./ScrollDelay";

function Thirteenth() {
  gsap.registerPlugin(ScrollTrigger);

  const imageTime = gsap.timeline();

  imageTime
    .to(".firstthir", {
      y: -150,
      x: -100,
      ease: "linear",
      duration: 1,
    })
    .to(
      ".secondthir",
      {
        duration: 1,
        ease: "linear",
        x: -170,
        y: 530,
      },
      "<"
    )
    .to(
      ".thirdthir",
      {
        duration: 1,
        ease: "linear",
        x: 50,
        y: 200,
      },
      "<"
    )
    .to(
      ".fourththir",
      {
        x: 20,
        duration: 1,
        ease: "linear",
        y: 800,
      },
      "<"
    )
    .to(
      ".fifththir",
      {
        duration: 1,
        ease: "linear",
        x: 500,
        y: 350,
      },
      "<"
    );

  ScrollTrigger.create({
    animation: imageTime,
    scrub: true,
    // markers: true,
    start: "top 54%",
    end: "bottom 100%",
    trigger: ".pictureAnimation",
  });

  return (
    <ScrollDelay delayTime={2000}>
      <section>
        <div className="thirteen">
          <div className="paraSectionThir">
            <h2>The picture of versatility.</h2>
          </div>
          <div className="pictureAnimation">
            <div className="firstthir">
              <img src="firstthir.jpg" alt="dirst" />
              <p>1x Main | 24 mm</p>
            </div>
            <div className="secondthir">
              <img src="secondthir.jpg" alt="second" />
              <p>New 2x Telephoto | 48 mm</p>
            </div>
            <div className="thirdthir">
              <img src="thirdthir.jpg" alt="second" />
              <p style={{ textAlign: "right" }}>
                0.5x Ultra Wide Macro | 13 mm
              </p>
            </div>
            <div className="fourththir">
              <img src="fourththir.jpg" alt="second" />
              <p>3x Telephoto | 77 mm</p>
            </div>
            <div className="fifththir">
              <img src="fifththir.jpg" alt="second" />
              <p>0.5x Ultra Wide | 13 mm</p>
            </div>
          </div>
          <div className="thirPara">
            <h2>
              The new Pro camera system adds a 2x optical-quality Telephoto to
              its zoom range, putting tons of framing flexibility in your
              pocket. Up your frame game.
            </h2>
          </div>
          <div className="callarrow forWidth">
            <div className="arrowtrials">
              <div className="fortys">
                <ul className="textTrails">
                  <li>
                    {" "}
                    See how we created the
                    <br />
                    2x Telephoto and how to
                    <br />
                    get the most out of it
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
      </section>
    </ScrollDelay>
  );
}

export default Thirteenth;
