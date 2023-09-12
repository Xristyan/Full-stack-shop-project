package com.StoreProject.store.service;

import com.StoreProject.store.model.Products;
import com.StoreProject.store.model.Reviews;
import com.StoreProject.store.model.ReviewsResponse;
import com.StoreProject.store.model.config.FilterService.Filter;

import java.util.List;

public interface ProductService {
     List<Products> getProducts(String peopleType, String category, int page , int itemsPerPage, Filter filter);
     Products getProduct(int id,int itemsPerPage);
     ReviewsResponse saveReview(Reviews review,int id,int page,int itemsPerPage);

     ReviewsResponse getReviews(int id, int page, int itemsPerPage);

}
