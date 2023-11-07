import React from "react";
import "./Demo.css";
import gsap from "gsap";
// import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
// import { scrollTrigger } from "";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/dist/SplitText";
// import SplitText from "gsap/dist/SplitText";

import { useEffect } from "react";

function Demo() {
//   gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
    gsap.set("body", { autoAlpha: 1 });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".secondSection",
  //       start: "top 50%",
  //       end: "bottom top",
  //       scrub: true,
  //     //   markers:true,
  //     },
  //   });

  //   const colors = ["#10073f", "#9b34c1", "#f5abf7", "#5c1894", "#7f2704"];

  //   for (let i = 0; i < colors.length; i++) {
  //     tl.to(".typographyContent", {
  //       color: colors[i],
  //       duration: 1,
  //       ease: "none",
  //     });
  //   }

  //   const wrapper = document.querySelector('.wrapper');

  // window.addEventListener('scroll', () => {
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   const isBlack = scrollTop > wrapper.offsetHeight - window.innerHeight;
  //   wrapper.classList.toggle('black', isBlack);
  // });

  //   const tl = gsap.fromTo(
  //     ".arrowClass",
  //     { x: -300, duration: 3, ease: "linear" },
  //     { x: 0, duration: 3, ease: "linear" }
  //   );

  // const split = new SplitText("textTrail", { type: "chars" });


  useEffect(() => {
    gsap.fromTo(
      ".arrowClass",
      { x: -300, duration: 2, ease: "linear" },
      { x: 0, duration: 2, ease: "linear" }
    );

    // gsap.fromTo(
    //   ".textTrail",
    //   {
    //     opacity: 0,
    //     start: "left right",
    //     duration: 4,
    //     ease: "linear",
    //   },
    //   {
    //     opacity: 1,
    //     duration: 4,
    //     ease: "linear",
    //   }
    // );


    // const tl = gsap.timeline({ repeat: 10, id: "Made By Carl" });
    // tl.from( {
    //   duration: 1,
    //   opacity: 0,
    //   stagger: 0.05,
    //   ease: "power2.in",
    // });

    // tl.to(
     
    //   {
    //     duration: 0.5,
    //     opacity: 0,
    //     stagger: {
    //       from: "end",
    //       each: 0.05,
    //     },
    //   },
    //   "+=1"
    // );
  }, []);

  return (
    <section>
      <div className="arrowtrial">
        <div className="textTrail">
          See more of what Dynamic Island can do and how we brought it to
        </div>
        <div className="arrowClass">
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

      {/* <div className="videoTag">
        <video autoPlay muted className="videoHolder">
          <source src="large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="secondSection">
        <div className="item_wrapperSecond">
          <div className="typographyContent">
            A magical new way to interact with iPhone. A vital safety feature
            designed to save lives. An innovative 48MP camera for mind-blowing
            detail. All powered by the ultimate smartphone chip.
            <div className="gradientBox"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="secondSections">
        <div className="magicalContent">
          <h1>A magical new way to interact </h1>
          <h1>with iPhone. A vital safety feature</h1>
          <h1>designed to save lives. An</h1>
          <h1>innovative 48MP camera for</h1>
          <h1>mind-blowing detail. All powered </h1>
          <h1>by the ultimate smartphone chip.</h1>
        </div>
      </div> */}

      {/* <div class="wrapper">
  <div class="before"></div>
  <div class="main">
    <p class="text">This is a sticky text.</p>
  </div>
  <div class="after"></div>
</div> */}
    </section>
  );
}

export default Demo;
