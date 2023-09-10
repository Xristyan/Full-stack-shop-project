package com.StoreProject.store.service;

import com.StoreProject.store.modal.ProductResponse;
import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.Reviews;
import com.StoreProject.store.modal.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    public Products saveProduct(Products products);
    public List<Products> getProducts(String gender, String category);
    public ProductResponse getProduct(int id,int itemsPerPage);
    public Reviews saveReview(Reviews review,int id);

    public List<Reviews> getReviews(int id,int page,int itemsPerPage);

}
