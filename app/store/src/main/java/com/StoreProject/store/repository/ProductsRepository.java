package com.StoreProject.store.repository;

import com.StoreProject.store.modal.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products,Integer> {
}
