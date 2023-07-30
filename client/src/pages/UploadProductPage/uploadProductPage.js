import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";
import classes from "./uploadProduct.module.css";
import InputImage from "./inputImage";
import DetailsForm from "./datailsForm";
const UploadProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { requestHandler } = useHttp();
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
  useEffect(() => {}, [imageStore]);
  const imageHandler = async (e) => {
    // try {
    //   const formData = new FormData();
    //   formData.append("image", e.target.files[0]);
    //   const productData = {
    //     name: "Product Name",
    //     description: "Product Description",
    //     material: "Product Material",
    //     color: "Product Color",
    //     price: 19.99,
    //     gender: "Male",
    //     forChildren: true,
    //     typeOfProduct: "Product Type",
    //     brand: "Product Brand",
    //   };
    //   formData.append("product", JSON.stringify(productData));
    //   const response = await fetch("http://localhost:8080/product/add", {
    //     body: formData,
    //     method: "POST",
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <section className={classes.uploadContainer}>
      <div className={classes.backgroundDesignTop}></div>
      <div className={classes.imageUploadContainer}>
        {Array.from({ length: 3 }, (_, index) => index + 1).map((i) => {
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
      <DetailsForm />
      <div className={classes.backgroundDesignBot}></div>
    </section>
  );
};
export default UploadProductPage;
