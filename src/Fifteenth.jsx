import React, { useRef, useState } from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";

function Fifteenth() {
  const videoFifteen = useRef();
  const [play, setPlay] = useState(false);
  return (
    <section>
      <div className="fifteenthSection">
        <div className="fifteenthfirstPara">
          <h3>24. Breath­taking. Frames. Per. Second.</h3>
          <p>
            Cinematic mode now shoots in 4K HDR at 24 fps — the film industry
            standard. Have your people call our people.
          </p>
        </div>
        <div className="fifteenthVideo">
          <video loop autoPlay muted className="videoHolder" ref={videoFifteen}>
            <source src="fifteenth.mp4" type="video/mp4" />
          </video>
          {play ? (
            <BsPlayCircle
              onClick={() => {
                setPlay(false);
                videoFifteen.current.play();
              }}
            />
          ) : (
            <BsPauseCircle
              onClick={() => {
                setPlay(true);
                videoFifteen.current.pause();
              }}
            />
          )}
        </div>
        <div className="fifteenthsecondPara">
          <p className="firstfif">
            Now you can seamlessly edit with other pro footage in 4K at 24 or 30
            fps. You can even edit the depth effect after capture.
          </p>
          <p className="secondfif">
            <strong>Highest-quality video</strong>
            in a smartphone
          </p>
        </div>
      </div>
    </section>
  );
}

export default Fifteenth;
