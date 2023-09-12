import { useState, useRef } from "react";
import classes from "./inputImage.module.css";

const InputImage = (props) => {
  const [dislayedImage, setDisplayedImage] = useState(null);
  const fileInputRef = useRef(null);
  const displayImage = (e) => {
    console.log(e.target.files[0]);
    setDisplayedImage(e.target.files[0]);
    console.log({ id: props.id, file: e.target.files[0] });
    props.imageHandler({ id: props.id, file: e.target.files[0] });
  };
  const deleteImage = (e) => {
    e.preventDefault();
    setDisplayedImage(null);
    console.log(fileInputRef.current.value);
    fileInputRef.current.value = "";
    props.deleteImageHandler(props.id);
  };
  return (
    <label className={classes.imageLabel} htmlFor={`file${props.id}`}>
      <input
        className={classes.imageInput}
        onChange={displayImage}
        id={`file${props.id}`}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        ref={fileInputRef}
      />
      {dislayedImage ? (
        <div className={classes.image}>
          <img src={URL.createObjectURL(dislayedImage)} alt="image" />
          <button onClick={deleteImage}>X</button>
        </div>
      ) : (
        "+"
      )}
    </label>
  );
};
export default InputImage;
