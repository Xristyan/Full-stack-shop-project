package com.StoreProject.store.service;

import com.StoreProject.store.Exception.NotFoundException;
import com.StoreProject.store.model.Products;
import com.StoreProject.store.model.Reviews;
import com.StoreProject.store.model.ReviewsResponse;
import com.StoreProject.store.model.config.FilterService.Filter;
import com.StoreProject.store.model.config.FilterService.ProductsFilter;
import com.StoreProject.store.model.config.ReviewsService;
import com.StoreProject.store.repository.ProductsRepository;
import com.StoreProject.store.repository.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductsFilter productsFilter;
    @Autowired
    private ReviewsService reviewsService;
    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private ReviewsRepository reviewsRepository;


    @Override
    public List<Products> getProducts(String peopleType, String category, int page, int itemsPerPage, Filter filter) {
        if(peopleType.equalsIgnoreCase("Children") && category.equalsIgnoreCase("All") || category.equalsIgnoreCase("undefined"))
        {
            return productsRepository.findByForChildren(true);
        }

        if(category.equalsIgnoreCase("All") || category.equalsIgnoreCase("undefined"))
        {

           return productsFilter.productsFilter(productsRepository.findByGenderAndForChildren(peopleType,false),page,itemsPerPage,filter);
//            return productsRepository.findByGenderAndForChildren(peopleType,false);
        }
        else {
            return productsRepository.findByGenderAndCategoryAndForChildren(peopleType, category,false);
        }
    }

    @Override
    public Products getProduct(int id,int itemsPerPage) {
        Optional<Products> optionalProducts = productsRepository.findById(id);
        Products product=optionalProducts.orElseThrow(() -> new NotFoundException("Product with ID " + id + " not found"));

        return product;
    }

@Override
    public ReviewsResponse saveReview(Reviews review,int id,int page,int itemsPerPage)
    {
        Optional<Products> optionalProduct=productsRepository.findById(id);
        Products product=optionalProduct.orElseThrow(()-> new NotFoundException("Product with ID " + id + " not found"));

        if(reviewsRepository.existsByUserNameAndProduct(review.getUserName(),id))
        {
            throw new RuntimeException("User already has review");

        }

        product.getReviews().add( reviewsService.buildReview(id,review));
        productsRepository.save(product);

        return reviewsService.buildReviewResponse(product,page,itemsPerPage);
    }

    @Override
    public ReviewsResponse getReviews(int id, int page, int itemsPerPage) {
        Optional<Products> optionalProduct=productsRepository.findById(id);
        Products product=optionalProduct.orElseThrow(()-> new NotFoundException("Product with ID " + id + " not found"));


       return reviewsService.buildReviewResponse(product,page,itemsPerPage);

    }


}
