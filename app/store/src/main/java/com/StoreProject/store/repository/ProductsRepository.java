package com.StoreProject.store.repository;

import com.StoreProject.store.modal.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductsRepository extends JpaRepository<Products,Integer> {

    List<Products> findByGenderAndCategory(String gender, String category);
    List<Products> findByGender(String gender);
}
