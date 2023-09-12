package com.StoreProject.store.model;

import com.StoreProject.store.Validators.ValidBrand;
import com.StoreProject.store.Validators.ValidGender;
import com.StoreProject.store.Validators.ValidMaterial;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@Data
@AllArgsConstructor

public class Products {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotBlank(message = "Name is mandatory")
    @Size(min=4)
    private String name;
    @NotBlank(message = "Description is mandatory")
    @Size(min=10,max = 150)
    private String description;
    @NotBlank(message = "Material is mandatory")
    @ValidMaterial(message = "Invalid material")
    private String material;
    private int discount;
    @NotBlank(message = "Color is mandatory")
    private String color;
    @Positive(message = "Price must be greater than 0")
    private float price;
    @NotBlank(message = "Gender is mandatory")
    @ValidGender(message = "invalid gender")
    private String gender;
    private boolean forChildren;
    @NotBlank(message = "Type of the Product is mandatory")
    private String category;
    @NotBlank(message = "Brand is mandatory")
    @ValidBrand
    private String brand;
    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "product_id")
    private List<FileData> images;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "product_id")
    private List<Reviews> reviews;



}
