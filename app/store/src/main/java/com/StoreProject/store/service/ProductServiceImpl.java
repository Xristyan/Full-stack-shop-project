package com.StoreProject.store.service;

import com.StoreProject.store.Exception.NotFoundException;
import com.StoreProject.store.modal.ProductResponse;
import com.StoreProject.store.modal.Products;
import com.StoreProject.store.modal.Reviews;
import com.StoreProject.store.modal.User;
import com.StoreProject.store.repository.ProductsRepository;
import com.StoreProject.store.repository.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.*;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private ReviewsRepository reviewsRepository;

    @Override
    public Products saveProduct(Products products) {


        return productsRepository.save(products);
    }

    @Override
    public List<Products> getProducts(String gender, String category) {
        if(category.equals("All") || category.equals("undefined"))
        {
            return productsRepository.findByGender(gender);
        }
        else {
            return productsRepository.findByGenderAndCategory(gender, category);
        }
    }

    @Override
    public ProductResponse getProduct(int id,int itemsPerPage) {
        Optional<Products> optionalProducts = productsRepository.findById(id);
        Products product=optionalProducts.orElseThrow(() -> new NotFoundException("Product with ID " + id + " not found"));

        double sum=0;
        for (Reviews review : product.getReviews()) {
            sum += review.getRating();
        }

        int reviewsCount=product.getReviews().size();
        Collections.reverse(product.getReviews());
        if(product.getReviews().size()>=itemsPerPage) {
            product.setReviews(product.getReviews().subList(0, itemsPerPage));
        }

        ProductResponse productResponse=ProductResponse.builder()
                .product(product)
                .reviewsCount(reviewsCount)
                .averageRating(sum)
                .build();


        return productResponse;
    }

@Override
    public Reviews saveReview(Reviews review,int id)
    {
        Optional<Products> optionalProduct=productsRepository.findById(id);
        Products product=optionalProduct.orElseThrow(()-> new NotFoundException("Product with ID " + id + " not found"));

        if(reviewsRepository.existsByUserNameAndProduct(review.getUserName(),id))
        {
            throw new RuntimeException("User already has review");

        }

        Reviews reviewBuild= Reviews.builder().content(review.getContent())
                .date(LocalDate.now())
                .userName(review.getUserName())
                .rating(review.getRating())
                .product(id)
                .build();

        product.getReviews().add(reviewBuild);
        productsRepository.save(product);

        return reviewBuild;
    }

    @Override
    public List<Reviews> getReviews(int id, int page, int itemsPerPage) {
        Optional<Products> optionalProduct=productsRepository.findById(id);
        Products product=optionalProduct.orElseThrow(()-> new NotFoundException("Product with ID " + id + " not found"));

        return product.getReviews();
    }


}
