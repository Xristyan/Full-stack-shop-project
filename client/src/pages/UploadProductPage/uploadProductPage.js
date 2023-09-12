import { useState } from "react";
import classes from "./uploadProduct.module.css";
import InputImage from "./inputImage";
import DetailsForm from "./datailsForm";
import CategoryDropDown from "./categoryDropdown";
const UploadProductPage = () => {
  const [category, setCategory] = useState("");
  const [imageStore, setImageStore] = useState({});
  const addImage = (image) => {
    setImageStore((prev) => {
      return { ...prev, [image.id]: image.file };
    });
  };
  const deleteImage = (id) => {
    setImageStore((prev) => {
      const { [id]: _, ...updatedImageStore } = prev;
      return updatedImageStore;
    });
  };
  const productHandler = async (product) => {
    try {
      if (Object.keys(imageStore).length === 0 || category === "") return;
      const formData = new FormData();
      for (const key in imageStore) {
        formData.append("image", imageStore[key]);
      }
      product.category = category;
      formData.append("product", JSON.stringify(product));

      const response = await fetch("http://localhost:8080/products/add", {
        body: formData,
        method: "POST",
      });
    } catch (err) {
      console.log(err);
      console.error(err);
    }
  };
  return (
    <section className={classes.uploadContainer}>
      <CategoryDropDown setCategoryHandler={setCategory} />
      <div className={classes.imageUploadContainer}>
        {Array.from({ length: 6 }, (_, index) => index + 1).map((i) => {
          return (
            <InputImage
              key={i}
              id={i}
              deleteImageHandler={deleteImage}
              imageHandler={addImage}
            />
          );
        })}
      </div>
      <DetailsForm productHandler={productHandler} />
    </section>
  );
};
export default UploadProductPage;
