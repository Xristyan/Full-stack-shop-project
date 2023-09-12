package com.StoreProject.store.model.config;

import com.StoreProject.store.model.Products;
import com.StoreProject.store.model.Reviews;
import com.StoreProject.store.model.ReviewsResponse;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;

@Service
public class ReviewsService {


    public ReviewsResponse buildReviewResponse(Products product,int page,int itemsPerPage)
    {
        int startIndex=(page-1)*itemsPerPage;
        int endIndex=page*itemsPerPage;
        if(endIndex>=product.getReviews().size())
        {
            endIndex=product.getReviews().size();
        }

        double ratingSum=0;
        for (Reviews review : product.getReviews()) {
            ratingSum += review.getRating();
        }
        Collections.reverse(product.getReviews());

        ReviewsResponse reviewsResponse=ReviewsResponse.builder()
                .reviewsCount(product.getReviews().size())
                .reviews(product.getReviews().subList(startIndex,endIndex))
                .averageRating(ratingSum)
                .build();
        return reviewsResponse;

    }

    public Reviews buildReview(int id,Reviews review)
    {
        Reviews reviewBuild= Reviews.builder().content(review.getContent())
                .date(LocalDate.now())
                .userName(review.getUserName())
                .rating(review.getRating())
                .product(id)
                .build();
        return reviewBuild;
    }


}
