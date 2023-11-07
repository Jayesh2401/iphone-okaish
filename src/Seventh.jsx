import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";

function Seventh() {
  gsap.registerPlugin(ScrollTrigger);
  const pushPhoneUp = gsap.timeline();
  const paragraphandscale = gsap.timeline();
  const sizeDecrease = gsap.timeline();
  const seventhParatwo = gsap.timeline();
  const gardref = useRef(null);
  const seventhVideo = useRef(null);

  // ***********pushPhoneUp up animation********
  //   pushPhoneUp
  //     .to(".afteralwaysReady", { y: -100, duration: 1, ease: "linear" })
  //     .to(".mobileVideo", {
  //       y: -10,
  //       duration: 1,
  //       ease: "linear",
  //     });

  //   ScrollTrigger.create({
  //     animation: pushPhoneUp,
  //     trigger: ".phonetrigger",
  //     start: "top 87%",
  //     end: "bottom 91%",
  //     scrub: true,
  //     ease: "linear",
  //     // markers: true,
  //   });
  // **********************

  // *********************para and mobile scale *************
  paragraphandscale.to(".seventhFirst", {
    opacity: 1,
    duration: 1,
    ease: "linear",
  });

  ScrollTrigger.create({
    animation: paragraphandscale,
    trigger: ".seventhFirst",
    // endTrigger:"",
    start: "top 80%",
    end: "bottom 81%",
    scrub: true,
    // onEnter: () => {
    //     seventhVideo.current.play();
    //   },
    onScrubComplete: () => {
      seventhVideo.current.play();
    },
    // markers: true,
  });
  //   *********************

  //   *********Scale down the image pic ************
  sizeDecrease.fromTo(
    ".mobileVideo",
    {
      width: "65%",
      duration: 1,
      ease: "linear",
    },
    { width: "55%", ease: "linear" }
  );
  ScrollTrigger.create({
    animation: sizeDecrease,
    trigger: ".seventhSecond",
    start: "top 80%",
    end: "bottom 85%",
    // markers: true,
    scrub: true,
  });
  //   **********************

  // *************************tow para of seventh *************

  useEffect(() => {
    const ele = gardref.current;

    seventhParatwo.to(".cc", {
      opacity: 1,
      duration: 1,
    });
    ScrollTrigger.create({
      animation: seventhParatwo,
      trigger: ".seventhSecond",
      start: "top 70%",
      end: "bottom 75%",
    //   markers: true,
      scrub: true,
      // onEnter: ()=>
      onEnter: () => {
        ele.classList.add("addGrad");
      },
    });
  }, []);

  return (
    <section className="seventhSection">
      <div className="seventh">
        <h1>Always-On display.</h1>
        <h1>Always at the ready.</h1>
      </div>
      <span className="phonetrigger"></span>
      <div className="afteralwaysReady">
        <div className="mobileVideo">
          <img
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/lock-screen/always_on_hw__dwvwkg9rs8gi_large.png"
            alt="mobilecover"
            className="imageseventh"
          />
          <video muted className="videoseventh" ref={seventhVideo}>
            <source
              src="https://www.apple.com/105/media/in/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/always-on/large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="paragraphSeventh">
          <div className="seventhFirst seventhpara">
            Now your Lock Screen is always glanceable, so you don’t even have to
            tap it to stay in the know.
          </div>
          <div className="seventhSecond seventhpara cc">
            When iPhone is turned face down or in your pocket, it goes dark to
            save battery life.
          </div>
          <div className="seventhGradient cc" ref={gardref}>
            All-day <br />
            battery life<sup>3</sup>
          </div>
          <div className="seventhLast cc">
            even with so many <br />
            new capabilities
          </div>
        </div>
      </div>
    </section>
  );
}

export default Seventh;
