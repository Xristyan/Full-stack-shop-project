package com.StoreProject.store.repository;

import com.StoreProject.store.modal.Student;
import com.StoreProject.store.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
