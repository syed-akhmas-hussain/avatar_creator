import "./../css/TryOn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const TryOn: React.FC = () => {
  return (
    <div id="newHome">
      <div id="tryONcont">
        <h1>Atleast upload one image of your face</h1>
        <div id="four">
          <div className="row">
            <div className="upload-wrapper">
              <input type="file" id="upload1" className="file-input" />
              <label htmlFor="upload1" className="upload-label">
                <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
              </label>
            </div>
            <div className="upload-wrapper">
              <input type="file" id="upload2" className="file-input" />
              <label htmlFor="upload2" className="upload-label">
                <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="upload-wrapper">
              <input type="file" id="upload1" className="file-input" />
              <label htmlFor="upload1" className="upload-label">
                <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
              </label>
            </div>
            <div className="upload-wrapper">
              <input type="file" id="upload2" className="file-input" />
              <label htmlFor="upload2" className="upload-label">
                <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
              </label>
            </div>
          </div>
        </div>

        <div id="colorAndClothesCont">
          <div className="colorAndClothes">
            <button className="eachColor">
              <div id="red"></div>
              <p>Red</p>
            </button>

            <button className="eachColor">
              <div id="blue"></div>
              <p>Blue</p>
            </button>

            <button className="eachColor">
              <div id="green"></div>
              <p>Green</p>
            </button>
          </div>
          {/* <div className="colorAndClothes"></div> */}
        </div>
        <div id="btn">
          <button id="btn2">Generate Avatar</button>
        </div>
        <div id="avatar"></div>
      </div>
    </div>
  );
};
export default TryOn;
