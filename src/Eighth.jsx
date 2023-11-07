import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

function Eighth() {
  gsap.registerPlugin(ScrollTrigger);

  const firstSlide = useRef();
  const secondSlide = useRef();
  const thirdSlide = useRef();
  const forthSlide = useRef();
  const fifthSlide = useRef();
  const sixthSlide = useRef();
  const seventhSlide = useRef();
  const eigthSlide = useRef();
  const lock = gsap.timeline();
  const lockAnimations = useRef(null);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    const imageWidth = 409;

    switch (slideNumber) {
      case 0:
        if (direction === "right") {
          setSlideNumber(slideNumber + 1);
          console.log("0");
          if (slideNumber === 0) {
            firstSlide.current.style.animation = `opacimobile 1s ease`;
            firstSlide.current.style.visibility = `hidden`;

            secondSlide.current.style.transform = `translateX(${
              -imageWidth * 1
            }px)`;
            thirdSlide.current.style.transform = `translateX(${
              -imageWidth * 1
            }px)`;
            forthSlide.current.style.transform = `translateX(${
              -imageWidth * 1
            }px)`;
            return;
          }
        }
        break;

      case 1:
        switch (direction) {
          case "left":
            console.log("left1");
            setSlideNumber(slideNumber - 1);
            if (slideNumber === 1) {
              firstSlide.current.style.animation = `scalemobile 1s ease-out`;
              firstSlide.current.style.visibility = `visible`;

              secondSlide.current.style.transform = `translateX(0px)`;
              thirdSlide.current.style.transform = `translateX(${+imageWidth}px)`;
            }
            break;
          case "right":
            setSlideNumber(slideNumber + 1);
            console.log("right1");
            secondSlide.current.style.animation = `opacimobile 1s ease`;
            secondSlide.current.style.visibility = `hidden`;

            thirdSlide.current.style.transform = `translateX(${
              -imageWidth * 2
            }px)`;
            forthSlide.current.style.transform = `translateX(${
              -imageWidth * 2
            }px)`;
        }
        break;

      case 2:
        if (direction === "left") {
          console.log("case2left");
          setSlideNumber(slideNumber - 1);
          secondSlide.current.style.animation = `scalemobile 1s ease-out`;
          secondSlide.current.style.visibility = `visible`;

          thirdSlide.current.style.transform = `translateX(${-imageWidth}px)`;
          forthSlide.current.style.transform = `translateX(${-imageWidth}px)`;
        }
        if (direction === "right") {
          setSlideNumber(slideNumber + 1);
          thirdSlide.current.style.animation = `opacimobile 1s ease`;
          thirdSlide.current.style.visibility = `hidden`;
          forthSlide.current.style.transform = `translateX(${
            -imageWidth * 3
          }px)`;
          fifthSlide.current.style.transform = `translateX(${
            -imageWidth * 3
          }px)`;
        }
        break;

      case 3:
        if (direction === "left") {
          console.log("case3left");
          setSlideNumber(slideNumber - 1);
          thirdSlide.current.style.animation = `scalemobile 1s ease-out`;
          thirdSlide.current.style.visibility = `visible`;
          forthSlide.current.style.transform = `translateX(${
            -imageWidth * 2
          }px)`;
          fifthSlide.current.style.transform = `translateX(${
            -imageWidth * 2
          }px)`;
        }
        if (direction === "right") {
          console.log("case3right");
          setSlideNumber(slideNumber + 1);
          forthSlide.current.style.animation = `opacimobile 1s ease`;
          forthSlide.current.style.visibility = `hidden`;
          fifthSlide.current.style.transform = `translateX(${
            -imageWidth * 4
          }px)`;
          sixthSlide.current.style.transform = `translateX(${
            -imageWidth * 4
          }px)`;
        }
        break;

      case 4:
        if (direction === "left") {
          console.log("case4left");
          setSlideNumber(slideNumber - 1);
          forthSlide.current.style.animation = `scalemobile 1s ease-out`;
          forthSlide.current.style.visibility = `visible`;
          fifthSlide.current.style.transform = `translateX(${
            -imageWidth * 3
          }px)`;
          sixthSlide.current.style.transform = `translateX(${
            -imageWidth * 3
          }px)`;
        }
        if (direction === "right") {
          console.log("case4right");
          setSlideNumber(slideNumber + 1);
          fifthSlide.current.style.animation = `opacimobile 1s ease`;
          fifthSlide.current.style.visibility = `hidden`;
          sixthSlide.current.style.transform = `translateX(${
            -imageWidth * 5
          }px)`;
          seventhSlide.current.style.transform = `translateX(${
            -imageWidth * 5
          }px)`;
        }
        break;

      case 5:
        if (direction === "left") {
          console.log("case5left");
          setSlideNumber(slideNumber - 1);
          fifthSlide.current.style.animation = `scalemobile 1s ease-out`;
          fifthSlide.current.style.visibility = `visible`;
          sixthSlide.current.style.transform = `translateX(${
            -imageWidth * 4
          }px)`;
          seventhSlide.current.style.transform = `translateX(${
            -imageWidth * 4
          }px)`;
        }
        if (direction === "right") {
          console.log("case5right");
          setSlideNumber(slideNumber + 1);
          sixthSlide.current.style.animation = `opacimobile 1s ease`;
          sixthSlide.current.style.visibility = `hidden`;
          seventhSlide.current.style.transform = `translateX(${
            -imageWidth * 6
          }px)`;
          eigthSlide.current.style.transform = `translateX(${
            -imageWidth * 6
          }px)`;
        }
        break;

      case 6:
        if (direction === "left") {
          console.log("case6left");
          setSlideNumber(slideNumber - 1);
          sixthSlide.current.style.animation = `scalemobile 1s ease-out`;
          sixthSlide.current.style.visibility = `visible`;
          seventhSlide.current.style.transform = `translateX(${
            -imageWidth * 5
          }px)`;
          eigthSlide.current.style.transform = `translateX(${
            -imageWidth * 5
          }px)`;
        }
        break;

      default:
        break;
    }
  };

  // lock.to(".lockAnimationSection", {
  //   color: "white",
  // });

  // ScrollTrigger.create({
  //   animation: lock,
  //   start: "top 70%",
  //   trigger: ".lockAnimationSection",
  //   bottom: "bottom 74%",
  //   markers: true,
  //   onEnter: () => {
  //     lockAnimations.current.classList.add("animate-lock");
  //   },
  // });

  useEffect(() => {
    const element = lockAnimations.current;
    // const trigger = element.offsetTop + element.offsetHeight / 2;

    ScrollTrigger.create({
      trigger: ".lockAnimation",
      start: "top 80%",
      end: "bottom 80%",
      // markers: true,
      // scrub: true,
      onEnter: () => {
        element.classList.add("animate-lock");
      },
      // onLeave:()=>{
      //   element.classList.remove("animate-lock")
      // }
    });
  }, []);

  return (
    <div className="content_wrapperEight">
      <div className="eightContainer">
        <div className="gridContainer">
          <div className="textContainer">
            <div className="h2warpper">
              <h2>Your photo. Your font. Your widgets. Your iPhone.</h2>
              <p className="">
                iOS&nbsp;16 lets you customise your Lock&nbsp;Screen in fun new
                ways. Layer a photo to make it pop. Track your Activity rings.
                And see live updates from your favourite apps.
              </p>
            </div>
          </div>
          <div className="caroselConatiner">
            <div className="gallery_lockscreen">
              <div className="item_container">
                <div className="lockScreenGalleryitems" ref={firstSlide}>
                  <div className="imagesScreen gallery-1"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={secondSlide}>
                  <div className="imagesScreen gallery-2"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={thirdSlide}>
                  <div className="imagesScreen gallery-3"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={forthSlide}>
                  <div className="imagesScreen gallery-4"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={fifthSlide}>
                  <div className="imagesScreen gallery-5"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={sixthSlide}>
                  <div className="imagesScreen gallery-6"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={seventhSlide}>
                  <div className="imagesScreen gallery-7"></div>
                </div>
                <div className="lockScreenGalleryitems" ref={eigthSlide}>
                  <div className="imagesScreen gallery-8"></div>
                </div>
              </div>
            </div>
            <div className="item-mask">&nbsp;</div>
            <div className="lockScreenArrow">
              <ul className="buttonArrangment">
                <li>
                  <button onClick={() => handleClick("left")}>
                    <MdOutlineArrowBackIosNew />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleClick("right")}>
                    <MdOutlineArrowForwardIos />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lockAnimationSection">
          <div className="lockAnimation">
            <div
              className="privacy-img aside-image-privacy"
              ref={lockAnimations}
            ></div>
            <div className="texts">
              App Tracking Transparency lets you decide which apps are allowed
              to track your activity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eighth;
