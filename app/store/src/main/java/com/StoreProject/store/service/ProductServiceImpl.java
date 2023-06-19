package com.StoreProject.store.service;

import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductsRepository productsRepository;

    @Override
    public Products saveProduct(Products products) {
        return productsRepository.save(products);
    }

    @Override
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }

    @Override
    public Products getProduct(int id) {
        Optional<Products> optionalProducts = productsRepository.findById(id);
        Products products=optionalProducts.get();
        return products;
    }


}
