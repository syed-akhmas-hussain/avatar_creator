import "./../css/TryOn.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useData, type imagesType } from "../providers/useData";
import FileInput from "./FileInput";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";
export type dataForModelType = {
  selectedFilesUrl: String[];
  selectedCategory: "shirts" | "suit" | "tshirts" | "";
  selectedImg: string | null;
};
type avatar = {
  message: string;
  generated_avatar: string;
};
const TryOn: React.FC = () => {
  const { data } = useData();
  const homeref = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [dataForModel, setDataForModel] = useState<dataForModelType>({
    selectedFilesUrl: [],
    selectedCategory: "",
    selectedImg: null,
  });
  const [avatarData, setAvatarData] = useState<avatar>({
    message: "",
    generated_avatar: "",
  });
  const [load, setLoad] = useState<boolean>(false);
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);

  const handleUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: string) => {
      const intIndex = parseInt(index);
      const file = event.target.files?.[0] || null;
      setFiles((prev) => {
        const newFiles = [...prev];
        newFiles[intIndex] = file;
        return newFiles;
      });
    },
    []
  );
  const handleAvatarGenerator = async () => {
    setLoad(true);
    const url: string[] = [];
    const formData = new FormData();
    filesToUpload.forEach((file: File) => {
      formData.append(`files`, file);
      url.push(`http://localhost:5000/useruploads/${file.name}`);
    });
    setDataForModel((prev) => ({
      ...prev,
      selectedFilesUrl: url,
    }));
    formData.append(
      "metadata",
      JSON.stringify({
        wear: dataForModel.selectedImg,
      })
    );
    try {
      const resp = await fetch("http://localhost:5000/useruploads", {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) throw new Error("Upload failed");
    } catch (err) {
      console.error("Error msg: ", err);
    }
    try {
      const resp = await fetch("http://localhost:5000/gernator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...dataForModel, selectedFilesUrl: url }),
      });
      const res: avatar = await resp.json();
      if (resp.ok) {
        setAvatarData(res);
        localStorage.setItem("generated_avatar", res.generated_avatar);
        setLoad(false);
      }
    } catch (err) {
      console.log(`Error msg: ${err}`);
    }
  };
  useEffect(() => {
    const arr: File[] = files.filter((i) => i !== null);
    setFilesToUpload(arr);
  }, [files]);

  useEffect(() => {
    const saved = localStorage.getItem("generated_avatar");
    if (saved) {
      setAvatarData({
        message: "Reloaded from local storage",
        generated_avatar: saved,
      });
    }
  }, []);
  return (
    <>
      <NavBar homeRef={homeref} contactRef={contactRef} />
      <div id="newHome">
        <div id="tryONcont">
          <h1>Atleast upload one image of your face, color, and category</h1>
          <div id="four">
            <div className="row">
              <FileInput files={files} id="0" handleUpload={handleUpload} />
              <FileInput files={files} id="1" handleUpload={handleUpload} />
              <FileInput files={files} id="2" handleUpload={handleUpload} />
              <FileInput files={files} id="3" handleUpload={handleUpload} />
            </div>
          </div>

          <div id="colorAndClothesCont">
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
              {data?.[dataForModel.selectedCategory].map(
                (i: imagesType, idx) => (
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
                )
              )}
            </div>
          )}
          <div id="btn">
            {filesToUpload.length !== 0 &&
              dataForModel.selectedCategory &&
              dataForModel.selectedImg && (
                <button id="btn2" onClick={handleAvatarGenerator}>
                  Generate Avatar
                </button>
              )}
          </div>
          <div id="avatar">
            {load ? (
              <LoadingSpinner />
            ) : (
              <img
                id="avtimgtag"
                src={avatarData.generated_avatar}
                alt={avatarData.message}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TryOn;
