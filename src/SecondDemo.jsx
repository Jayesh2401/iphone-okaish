import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap }from "gsap";
import React from "react";
import "./SecondDemo.css"
function SecondDemo() {
  gsap.registerPlugin(ScrollTrigger);

  // Define the animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondSection",
      start: "top 100%",
      end: "bottom top", 
      scrub: true,
    },
  });

  // Define the color stops
  const colors = ["#10073f", "#9b34c1", "#f5abf7", "#5c1894", "#7f2704"];

  // Add color changes to the timeline
  for (let i = 0; i < colors.length; i++) {
    tl.to(".magicalContent", {
      color: colors[i],
      duration: 1,
      ease: "none",
    });
  }

  return (
    <div class="secondSection">
      <div class="magicalContent">
        <h1>A magical new way to interact </h1>
        <h1>with iPhone. A vital safety feature</h1>
        <h1>designed to save lives. An</h1>
        <h1>innovative 48MP camera for</h1>
        <h1>mind-blowing detail. All powered </h1>
        <h1>by the ultimate smartphone chip.</h1>
      </div>
    </div>
  );
}

export default SecondDemo;
