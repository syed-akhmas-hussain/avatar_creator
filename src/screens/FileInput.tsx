import React from "react";
import "./../css/FileInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

type FileInputProps = {
  files: (File | null)[];
  id: string;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>, index: string) => void;
};
const FileInput = React.memo(({ files, id, handleUpload }: FileInputProps) => {
  const intIndex = parseInt(id);
  return (
    <>
      {files[intIndex] ? (
        <div className="upload-wrapper">
          <img
            src={URL.createObjectURL(files[intIndex])}
            alt="preview"
            className="preview-img"
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : (
        <div className="upload-wrapper">
          <input
            type="file"
            id={`upload${id}`}
            className="file-input"
            onChange={(e) => handleUpload(e, id)}
          />
          <label htmlFor={`upload${id}`} className="upload-label">
            <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
          </label>
        </div>
      )}
    </>
  );
});
export default FileInput;
