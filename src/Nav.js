import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import gsap from "gsap";
import "./test.css";

const Navigations = () => {
//   const [navbar, setNavbar] = useState(false);
//   const [color, setColor] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setNavbar(true);
//       setColor("black");
//     } else {
//       setNavbar(false);
//       setColor("white");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeBackground, true);
//     return () => window.removeEventListener("scroll", changeBackground);
//   }, []);

  // gsap.to(".text_wrapper", {
  //   scrollTrigger: {
  //     trigger: ".parent_wrapper",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //     markers: true
  //   },
  //   color: "red"
  // });

  // gsap.to(".text_wrapper", {
  //   scrollTrigger: {
  //     trigger: ".parent_wrapper",
  //     start: "bottom top",
  //     end: "top top",
  //     scrub: true,
  //     markers: true,
  //     toggleActions: "play none none reverse"
  //   },
  //   color: "white"
  // });

//   gsap.to(".text_wrapper", {
//     scrollTrigger: {
//       trigger: ".parent_wrapper",
//       start: "top top",
//       end: "bottom bottom",
//       scrub: true,
//       onReverseComplete: function () {
//         gsap.to(".text_wrapper", { color: "white" });
//       },
//     },
//     color: "red",
//   });

  window.addEventListener("scroll", function () {
    document.querySelector(".parent-div").classList.add("scroll");
  });
  return (
    // <div class="parent_wrapper">
    //   <div class="secondSection">
    //     <div class="item_wrapperSecond">
    //       <div class="typographyContent">
    //         <div class="text_wrapper">
    //           A MAGICAL NEW WAY TO INTERACT WITH IPHONE. A VITAL SAFETY FEATURE
    //           DESIGNED TO SAVE LIVES. AN INNOVATIVE 48MP CAMERA FOR MIND-BLOWING
    //           DETAIL. ALL POWERED BY THE ULTIMATE SMARTPHONE CHIP.
    //         </div>
    //         <div class="gradientBox"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="parent-div">
      <div class="child-div"> gvbsrdb vbsdfvb
      dvd</div>
     
    </div>
  );
};

export default Navigations;
