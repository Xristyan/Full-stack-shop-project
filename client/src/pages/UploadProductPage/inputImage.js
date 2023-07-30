import { useState, useRef } from "react";
import classes from "./inputImage.module.css";

const InputImage = (props) => {
  const [dislayedImage, setDisplayedImage] = useState(null);
  const fileInputRef = useRef(null);
  const displayImage = (e) => {
    setDisplayedImage(e.target.files[0]);
    console.log({ id: props.id, file: e.target.files[0] });
    props.imageHandler({ id: props.id, file: e.target.files[0] });
  };
  const deleteImage = () => {
    setDisplayedImage(null);
    fileInputRef.current.value = "";
    props.deleteImageHandler(props.id);
  };
  return (
    <label className={classes.imageLabel} htmlFor="file">
      <input
        className={classes.imageInput}
        onChange={displayImage}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        ref={fileInputRef}
      />
      {dislayedImage ? (
        <div className={classes.image}>
          <img src={URL.createObjectURL(dislayedImage)} alt="image" />
          <span onClick={deleteImage}>X</span>
        </div>
      ) : (
        "+"
      )}
    </label>
  );
};
export default InputImage;
