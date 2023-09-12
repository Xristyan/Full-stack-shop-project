package com.StoreProject.store.repository;

import com.StoreProject.store.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductsRepository extends JpaRepository<Products,Integer> {

    List<Products> findByGenderAndCategoryAndForChildren(String gender, String category,Boolean forChildren);
    List<Products> findByGenderAndForChildren(String gender,Boolean forChildren);
    List<Products> findByForChildren(Boolean forChildren);
}
