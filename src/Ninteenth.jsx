import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
function Ninteenth() {
  const swiftRIght = gsap.timeline();

  swiftRIght.fromTo(".rigthNine", { x: -500, y: 0 }, { x: 110, y: 0 });

  ScrollTrigger.create({
    animation: swiftRIght,
    trigger: ".rigthNine",
    start: "top 85%",
    end: "bottom 99%",
    scrub: true,
    // markers: true,
  });

  return (
    <section>
      <div className="ninteenthSection">
        <div className="leftNine">
          <h3>The mastermind behind it all.</h3>
          <p>
            Say hello to A16 Bionic,
            <br /> the ultimate smartphone chip.
          </p>
        </div>
        <div className="rigthNine">
          <picture>
            <img src="purple.jpg" alt="purple" />
          </picture>
        </div>
      </div>
      <div className="callarrow forEight forBottom">
        <div className="arrowtrials">
          <div className="fortys">
            <ul className="textTrails">
              <li>
                Geek out on the
                <br />
                specs of A16 Bionic
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
      <div className="lockAnimationSection">
          <div className="lockAnimation forNinteen">
            <div
              className="privacy-img aside-image-privacy"
              //   ref={lockAnimations}
            ></div>
            <div className="texts tex">
            The Secure Enclave in A16 Bionic protects personal information like your Face ID data, contacts and more
            </div>
          </div>
        </div>
    </section>
  );
}

export default Ninteenth;
