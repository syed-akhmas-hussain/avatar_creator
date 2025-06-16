import "./../css/TryOn.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useData, type imagesType } from "../providers/useData";
import FileInput from "./FileInput";
import LoadingSpinner from "./LoadingSpinner";
import NavBar from "./NavBar";
// import avtImg from "./../../../backend/uploads/shirts/s1.png";
export type dataForModelType = {
  selectedFilesUrl: String[];
  // selectedColor: "red" | "blue" | "green" | "";
  selectedCategory: "shirts" | "suit" | "tshirts" | "";
  selectedImg: string | null;
};
type avatar = {
  message: string;
  generated_avatar: string;
};
// type saveAvatar = {
//   message: string;
//   file?: string;
// };
const TryOn: React.FC = () => {
  const { data } = useData();
  const homeref = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const [dataForModel, setDataForModel] = useState<dataForModelType>({
    selectedFilesUrl: [],
    // selectedColor: "",
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
        // bgColor: dataForModel.selectedColor,
        wear: dataForModel.selectedImg,
      })
    );
    try {
      const resp = await fetch("http://localhost:5000/useruploads", {
        method: "POST",
        body: formData,
      });
      if (!resp.ok) throw new Error("Upload failed");
      // const res = await resp.json();
      // console.log("Server Response: ", res);
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
      // console.log(res);
      if (resp.ok) {
        setAvatarData(res);
        localStorage.setItem("generated_avatar", res.generated_avatar);
        setLoad(false);
        // console.log(res.message);
      }
    } catch (err) {
      console.log(`Error msg: ${err}`);
    }
  };

  // const saveAvatar = async () => {
  //   try {
  //     const resp = await fetch("http://localhost:5000/save-avatar", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ avatar_url: avatarData.generated_avatar }),
  //     });
  //     if (resp.ok) {
  //       const res = resp.json();
  //     }
  //   } catch (error) {
  //     console.log(`Error from save-avatar route: ${error}`);
  //   }
  // };

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

  // console.log(dataForModel);
  // useEffect(() => {
  //   const fetchAvatar = async () => {
  //     const resp = await fetch("url");
  //     const res = await resp.json();
  //     setAvatarData(res);
  //     setLoad(false);
  //   };
  //   fetchAvatar();
  // }, []);

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
            {/* <div className="flex-col">
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
            </div> */}
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
              // dataForModel.selectedColor &&
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
                // style={{ backgroundColor: dataForModel.selectedColor }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TryOn;
