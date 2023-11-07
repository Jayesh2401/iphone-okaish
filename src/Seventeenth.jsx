import React from "react";

function Seventeenth() {
  return (
    <section>
      <div className="seventeenthSection">
        <div className="threeSeventeen">
          <ul className="listSeventeen">
            <li className="listThree">
              <h4>Main</h4>
              <p>48MP for up to 4x the resolution</p>
              <ul>
                <li>24 mm</li>
                <li>48 mm (2x Telephoto)</li>
                <li>Quad-pixel sensor</li>
                <li>2.44 µm quad pixel</li>
                <li>1.22 µm single pixel</li>
                <li>ƒ/1.78 aperture</li>
                <li>100% Focus Pixels</li>
                <li>7-element lens</li>
                <li >Sensor-shift OIS <br/>(2nd&nbsp;gen)</li>
              </ul>
            </li>
            <li className="listThree upSev">
              <h4>Telephoto</h4>
              <p>Up to 2x better low‑light photos</p>
              <ul>
                <li>77 mm</li>
                <li>3x optical zoom</li>
                <li>ƒ/2.8 aperture</li>
                <li>6% Focus Pixels</li>
                <li>6-element lens</li>
                <li>OIS</li>
              </ul>
            </li>
            <li className="listThree">
            <h4>Ultra Wide</h4>
            <p>Sharper, brighter macro shots</p>
            <ul>
              <li>13 mm</li>
              <li>120° field of view</li>
              <li>ƒ/2.2 aperture</li>
              <li>100% Focus Pixels</li>
              <li>6-element lens</li>
              <li tabIndex="-1">Lens correction</li>
            </ul>
            </li>
          </ul>
        </div>
        <div className="imageSeventeenth">
          <img src="seventeenth.jpg" alt="phone" />
        </div>
      </div>
    </section>
  );
}

export default Seventeenth;
