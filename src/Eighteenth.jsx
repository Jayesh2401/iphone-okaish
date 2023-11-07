import React from "react";

function Eighteenth() {
  return (
    <section>
      <div className="eighteenthSection">
        <div className="ParaEighteen">
          <div className="leftEighteen">
            <h3>A camera in a class by itselfie.</h3>
          </div>
          <div className="rightEighteen">
            <p>
              Snap your sharpest, most colourful close-ups and group shots,
              thanks to a new TrueDepth front camera with autofocus and a larger
              aperture.
            </p>
          </div>
        </div>
        <div className="bottomImageEight">
          <img src="eighteenImage.jpg" alt="mobile" />
          {/* <p>
            Up to
            <strong>2x better low-light photos</strong>
          </p> */}
        </div>
        <div className="callarrow forEight forBottom">
          <div className="arrowtrials">
            <div className="fortys">
              <ul className="textTrails">
                <li>
                  See how
                  <br />
                  spectacular your
                  <br />
                  selfies can look
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
        <div className="lockEighteen">
          <div className="lockSizes">
            <div className="eighteenLock"></div>
            <div className="lockPara">
              The TrueDepth camera and A16 Bionic also power Face ID, the most
              secure facial authentication in a smartphone
            </div>
          </div>
          <div className="lockSizes">
            <div className="greenlock"></div>
            <div className="lockPara">
              iPhone 14 Pro uses 100% recycled gold wire in all its cameras to
              reduce mining of precious resources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eighteenth;
