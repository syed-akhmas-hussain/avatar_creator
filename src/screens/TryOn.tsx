import "./../css/TryOn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useData, type imagesType } from "../providers/useData";
export type dataForModelType = {
  selectedColor: "red" | "blue" | "green" | "";
  selectedCategory: "shirts" | "suit" | "tshirts" | "";
  selectedImg: string | null;
};

const TryOn: React.FC = () => {
  const { data } = useData();
  const [dataForModel, setDataForModel] = useState<dataForModelType>({
    selectedColor: "",
    selectedCategory: "",
    selectedImg: null,
  });
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files?.[0] || null;
    setFiles(newFiles);
  };
  const handleAvatarGenerator = async () => {
    const formData = new FormData();
    filesToUpload.forEach((file: File) => {
      formData.append(`files`, file);
    });
    formData.append("metadata", JSON.stringify({
      bgColor: dataForModel.selectedColor,
      wear: dataForModel.selectedImg,
    }));
    try {
      const resp = await fetch("http://localhost:5000/useruploads", {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) throw new Error("Upload failed");
      const res = await resp.json();
      console.log("Server Response: ", res);
    } catch (err) {
      console.error("Error msg: ", err);
    }
    console.log(filesToUpload);
  };
  useEffect(() => {
    const arr: File[] = files.filter((i) => i !== null);
    setFilesToUpload(arr);
  }, [files]);
  // console.log(dataForModel);
  return (
    <div id="newHome">
      <div id="tryONcont">
        <h1>Atleast upload one image of your face, color, and category</h1>
        <div id="four">
          <div className="row">
            {files[0] ? (
              <div className="upload-wrapper">
                <img
                  src={URL.createObjectURL(files[0])}
                  alt="preview"
                  className="preview-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="upload-wrapper">
                <input
                  type="file"
                  id="upload0"
                  className="file-input"
                  onChange={(e) => handleUpload(e, 0)}
                />
                <label htmlFor="upload0" className="upload-label">
                  <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                </label>
              </div>
            )}

            {files[1] ? (
              <div className="upload-wrapper">
                <img
                  src={URL.createObjectURL(files[1])}
                  alt="preview"
                  className="preview-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="upload-wrapper">
                <input
                  type="file"
                  id="upload1"
                  className="file-input"
                  onChange={(e) => handleUpload(e, 1)}
                />
                <label htmlFor="upload1" className="upload-label">
                  <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                </label>
              </div>
            )}

            {files[2] ? (
              <div className="upload-wrapper">
                <img
                  src={URL.createObjectURL(files[2])}
                  alt="preview"
                  className="preview-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="upload-wrapper">
                <input
                  type="file"
                  id="upload2"
                  className="file-input"
                  onChange={(e) => handleUpload(e, 2)}
                />
                <label htmlFor="upload2" className="upload-label">
                  <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                </label>
              </div>
            )}

            {files[3] ? (
              <div className="upload-wrapper">
                <img
                  src={URL.createObjectURL(files[3])}
                  alt="preview"
                  className="preview-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <div className="upload-wrapper">
                <input
                  type="file"
                  id="upload3"
                  className="file-input"
                  onChange={(e) => handleUpload(e, 3)}
                />
                <label htmlFor="upload3" className="upload-label">
                  <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                </label>
              </div>
            )}
          </div>
        </div>

        <div id="colorAndClothesCont">
          <div className="flex-col">
            <div className="subHeadings">
              <p>Choose background Color</p>
            </div>
            <div className="colorAndClothes">
              <button
                className="eachColor"
                onClick={() => {
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedColor: "red",
                  }));
                }}
              >
                <div id="red"></div>
                <p>Red</p>
              </button>

              <button
                className="eachColor"
                onClick={() => {
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedColor: "blue",
                  }));
                }}
              >
                <div id="blue"></div>
                <p>Blue</p>
              </button>

              <button
                className="eachColor"
                onClick={() => {
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedColor: "green",
                  }));
                }}
              >
                <div id="green"></div>
                <p>Green</p>
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div className="subHeadings">
              <p>Choose outfit category</p>
            </div>
            <div className="colorAndClothes">
              <button
                className="eachColor"
                onClick={() =>
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedCategory: "suit",
                  }))
                }
              >
                Suits
              </button>
              <button
                className="eachColor"
                onClick={() =>
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedCategory: "tshirts",
                  }))
                }
              >
                T-Shirts
              </button>
              <button
                className="eachColor"
                onClick={() =>
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedCategory: "shirts",
                  }))
                }
              >
                Shirts
              </button>
            </div>
          </div>
        </div>
        {dataForModel.selectedCategory && (
          <div className="colorAndClothes">
            {data?.[dataForModel.selectedCategory].map((i: imagesType, idx) => (
              <div
                key={idx}
                className="suitImgs"
                onClick={() =>
                  setDataForModel((prev) => ({
                    ...prev,
                    selectedImg: i.url,
                  }))
                }
              >
                <img src={i.url} alt={i.filename} />
              </div>
            ))}
          </div>
        )}
        <div id="btn">
          {filesToUpload.length !== 0 &&
            dataForModel.selectedColor &&
            dataForModel.selectedCategory &&
            dataForModel.selectedImg && (
              <button id="btn2" onClick={handleAvatarGenerator}>
                Generate Avatar
              </button>
            )}
        </div>
        <div id="avatar"></div>
      </div>
    </div>
  );
};
export default TryOn;
