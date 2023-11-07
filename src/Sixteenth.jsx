import React, { useRef, useState } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { MdReplay } from "react-icons/md";
function Sixteenth() {
  const [six, setSix] = useState(0);
  const sixteen = useRef();
  return (
    <section>
      <div className="sixteenthSection">
        <div className="sixeenthHead">
          <h3>Shaky action shot? Fix it in pre.</h3>
        </div>
        <div className="horizontalPlay">
          <img src="horiz.png" alt="phomne" />
          <video
            autoPlay
            muted
            className="videoHolder"
            onEnded={() => setSix(2)}
            ref={sixteen}
          >
            <source src="run.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="sixteenPlay pauseandplay">
          {six === 0 && (
            <div
              className="playsix"
              onClick={() => {
                setSix(1);
                sixteen.current.pause();
              }}
            >
              pause <BiPauseCircle />
            </div>
          )}
          {six === 1 && (
            <div
              className="playsix"
              onClick={() => {
                setSix(0);
                sixteen.current.play();
              }}
            >
              play <BiPlayCircle />
            </div>
          )}
          {six === 2 && (
            <div
              className="playsix"
              onClick={() => {
                setSix(0);
                sixteen.current.play();
              }}
            >
              replay <MdReplay />
            </div>
          )}
        </div>
        <div className="sixteenSecond">
          <div className="firstSixth">
            <h3>
              Whether you’re filming from an off-road SUV or running alongside
              your subject, try Action mode for smooth handheld videos — no
              gimbal required.
            </h3>
          </div>
          <div className="secondSixth">
            <p>
              The only smartphone in the world that lets you
              <strong>
                shoot, view, edit and share in ProRes or Dolby Vision HDR
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sixteenth;
