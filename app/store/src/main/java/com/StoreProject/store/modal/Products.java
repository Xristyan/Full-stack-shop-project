package com.StoreProject.store.modal;

import com.StoreProject.store.Validators.ValidBrand;
import com.StoreProject.store.Validators.ValidGender;
import com.StoreProject.store.Validators.ValidMaterial;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Name is mandatory")
    @Size(min=4)
    private String name;
    @NotBlank(message = "Description is mandatory")
    @Size(min=10,max = 30)
    private String description;
    @NotBlank(message = "Material is mandatory")
    @ValidMaterial(message = "Invalid material")
    private String material;

    @NotBlank(message = "Color is mandatory")
    private String color;
    @Positive(message = "Price must be greater than 0")
//
    private float price;
    @NotBlank(message = "Gender is mandatory")
    @ValidGender(message = "invalid gender")
    private String gender;
    private boolean forChildren;
    @NotBlank(message = "Type of the Product is mandatory")
    private String typeOfProduct;
    @NotBlank(message = "Brand is mandatory")
    @ValidBrand
    private String brand;
    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "product_id")
    private List<FileData> images;


    public Products() {
    }

    public List<FileData> getImages() {
        return images;
    }

    public void setImages(List<FileData> images) {
        this.images = images;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public boolean isForChildren() {
        return forChildren;
    }

    public void setForChildren(boolean forChildren) {
        this.forChildren = forChildren;
    }

    public String getTypeOfProduct() {
        return typeOfProduct;
    }

    public void setTypeOfProduct(String typeOfProduct) {
        this.typeOfProduct = typeOfProduct;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}
