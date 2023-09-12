package com.StoreProject.store.repository;

import com.StoreProject.store.model.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewsRepository extends JpaRepository<Reviews,Integer> {

    boolean existsByUserNameAndProduct(String userName ,int product);
}
