import "./../css/TryOn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export type dataForModelType = {
  selectedColor: string;
  selectedCategory: string;
  selectedImg: string;
};

const TryOn: React.FC = () => {
  const [color, setColor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [dataForModel, setDataForModel] = useState<dataForModelType>({
    selectedColor: color,
    selectedCategory: category,
    selectedImg: img,
  })
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
          <div className="flex-col">
            <div className="subHeadings"><p>Choose background Color</p></div>
            <div className="colorAndClothes">
              <button className="eachColor" onClick={() => setColor("red")}>
                <div id="red"></div>
                <p>Red</p>
              </button>

              <button className="eachColor" onClick={() => setColor("red")}>
                <div id="blue"></div>
                <p>Blue</p>
              </button>

              <button className="eachColor" onClick={() => setColor("red")}>
                <div id="green"></div>
                <p>Green</p>
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="subHeadings"><p>Choose outfit category</p></div>
            <div className="colorAndClothes">
              <button className="eachColor" onClick={() => setCategory("suits")}>Suits</button>
              <button className="eachColor" onClick={() => setCategory("jeans")}>Jeans</button>
              <button className="eachColor" onClick={() => setCategory("shirts")}>Shirts</button>
            </div>
          </div>
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
