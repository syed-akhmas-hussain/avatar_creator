import "./../css/AboutUs.css";
import UsamaMir from "./../assets/usamaMir.webp";
import AbdulQavi from "./../assets/abdul qavi.jpg";
import DanishRaza from "./../assets/danish_original.jpg";
import JhanzebJaved from "./../assets/IMG-20250531-WA0003.jpg";
import { forwardRef } from "react";
type AboutUsProps = {};

const AboutUs = forwardRef<HTMLElement, AboutUsProps>((_props, ref) => {
  return (
    <section id="secondPage" ref={ref}>
      <div id="heading">
        <p>MEET OUR TEAM</p>
      </div>
      <div id="mem-cont">
        <div className="each-mem">
          <div
            className="mem-avatar"
            style={{
              backgroundImage: `url(${UsamaMir})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="mem-name">
            <p>Usama Mir</p>
          </div>
          <div className="mem-id">
            <p>58425</p>
          </div>
        </div>

        <div className="each-mem">
          <div
            className="mem-avatar"
            style={{
              backgroundImage: `url(${AbdulQavi})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="mem-name">
            <p>Abdul Qavi</p>
          </div>
          <div className="mem-id">
            <p>58336</p>
          </div>
        </div>

        <div className="each-mem">
          <div
            className="mem-avatar"
            style={{
              backgroundImage: `url(${DanishRaza})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="mem-name">
            <p>Danish Raza</p>
          </div>
          <div className="mem-id">
            <p>58418</p>
          </div>
        </div>

        <div className="each-mem">
          <div
            className="mem-avatar"
            style={{
              backgroundImage: `url(${JhanzebJaved})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="mem-name">
            <p>Jhanzaib Javed</p>
          </div>
          <div className="mem-id">
            <p>58476</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default AboutUs;
