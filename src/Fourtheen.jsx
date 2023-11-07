import React from "react";

function Fourtheen() {
  return (
    <section>
      <div className="fourtheen">
        <div className="fourtheenHead">
          <h2>Much more detail. In much less light.</h2>
        </div>
        <div className="picFourtheen">
          <div className="firstFourtheen">
            <img src="fourtheenfirst.jpg" alt="images" />
            <div className="fourtheenParaUpto">
              <p>Up to </p>
              <h4>
                3x better <br />
                low-light photos
              </h4>
              <p className="lastFourtheen">on the Ultra Wide camera</p>
            </div>
          </div>
          <div className="secondFourtheen">
            <img src="fourtheenthird.jpg" alt="images" />
            <div className="fourtheenParaUpto">
              <p>Up to </p>
              <h4>
                2x better
                <br /> low-light photos
              </h4>
              <p className="lastFourtheen">on the Main camera</p>
            </div>
          </div>
          <div className="thirdFourtheen">
            <img src="fourtheensecond.jpg" alt="images" />
            <div className="fourtheenParaUpto">
              <p>Up to </p>
              <h4>
                2x better <br />
                low-light photos
              </h4>
              <p className="lastFourtheen">on the Telephoto camera</p>
            </div>
          </div>
        </div>
        <div className="callarrow forWidth forBottom">
          <div className="arrowtrials">
            <div className="fortys">
              <ul className="textTrails">
                <li>
                  {" "}
                  See how advanced sensors
                  <br />
                  and software make such a
                  <br />
                  huge leap possible
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
          <div className="lockAnimation forlockWidth">
            <div
              className="privacy-img aside-image-privacy"
              //   ref={lockAnimations}
            ></div>
            <div className="texts tex">
              When apps request access to your photos, iPhone lets you call the
              shots by sharing just the ones you want instead of your entire
              library
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fourtheen;
