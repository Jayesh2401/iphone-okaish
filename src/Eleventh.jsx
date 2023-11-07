import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollDelay from "./ScrollDelay";
function Eleventh() {
  const [one, setOne] = useState(true);
  const playvideo = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [onePlayed, setOnePlayed] = useState(false);

  const sqaureSize = gsap.timeline({
    onComplete: () => {
      setOne(false);
      // playvideo.current.play();
    },
  });

  const eleventhPara = gsap.timeline();
  //   const sqaureSize = gsap.timeline({
  //     onComplete: () => {
  //         setOnePlayed(true);
  //         playvideo.current.play();
  //     },
  //   });
  //   useEffect(() => {

  //   }, [onePlayed]);

  //   ***********************sqaure animaiton&********************
  sqaureSize.fromTo(
    ".sqaureAnimation",
    {
      scale: 1.7,
      duration: 5,
      y: 10,
      //   opacity:1
    },
    {
      scale: 1,
      y: 500,
      duration: 3,
      ease: "linear",
      //   opacity:0
    }
  );

  ScrollTrigger.create({
    animation: sqaureSize,
    trigger: ".sqaureAnimation",
    start: "top 70%",
    end: "bottom 50%",
    scrub: true,
    // markers: true,
  });

  //   *************************************

  //   ******************paragraph appear on scroll******************

  eleventhPara.to(".contentWrapperelevent p", {
    opacity: 1,
    duration: 2,
    ease: "linear",
  });

  ScrollTrigger.create({
    animation: eleventhPara,
    trigger: ".contentWrapperelevent span",
    start: "top 40%",
    end: "bottom 30%",
    // scrub: true,
    // markers: true,
  });

  //   *******************

  return (
    <ScrollDelay delayTime={500}>
      <div className="eleventhContainer">
        <div className="contentWrapperelevent">
          <h3>
            The Pro camera system gets
            <strong>
              massively
              <span>more Pro.</span>
            </strong>{" "}
          </h3>
          <p>
            Introducing the all-new 48MP Main camera with an advanced quad-pixel
            sensor.
          </p>
        </div>
        <div className="sqaureAnimation" style={{ opacity: one ? 1 : 0 }}>
          <img src="sqaurecolored.jpg" alt="swaure" />
        </div>
        <div className="videoWrapperEleventh">
          <img
            src="eleventvideoimage.jpg"
            alt="image"
            style={{
              visibility: one ? "" : "hidden",
              display: one ? "block" : "none",
            }}
          />
          <video
            autoPlay
            ref={playvideo}
            muted
            className="videoHolder"
            style={{
              visibility: one ? "hidden" : "unset",
              display: one ? "none" : "block",
            }}
          >
            <source src="eleventh.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </ScrollDelay>
  );
}

export default Eleventh;
