package com.StoreProject.store.service;

import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    public Products saveProduct(Products products);
    public List<Products> getAllProducts();
    public Products getProduct(int id);

}
