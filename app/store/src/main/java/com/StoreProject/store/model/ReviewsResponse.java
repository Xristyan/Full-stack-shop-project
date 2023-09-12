package com.StoreProject.store.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReviewsResponse {

    private List<Reviews> reviews;

    private int reviewsCount;

    private double averageRating;

}
